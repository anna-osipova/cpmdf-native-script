import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import * as Dialogs from "ui/dialogs";
import "rxjs/Rx";
import { SearchBar } from 'tns-core-modules/ui/search-bar';

class Task {
  constructor(
    public id: string,
    public text: string,
    public completed: boolean) { }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public tasks: Array<Task>;
  options: RequestOptions;
  searchText: string = '';

  constructor(private http: Http) {
    this.tasks = [];
  }

  ngOnInit() {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YW5uYTp3ZXJlLWtlcHQtZmlndXJl');
    this.options = new RequestOptions({ headers });

    this.http.get('https://rocky-beach-17461.herokuapp.com/tasks', this.options)
      .map(result => result.json())
      .do(result => console.log("RESULT: ", JSON.stringify(result)))
      .subscribe(result => {
        result.forEach((entry) => {
          this.tasks = this.tasks.concat([new Task(entry['_id'], entry['text'], entry['completed'])]);
        });
      }, error => {
        console.log("ERROR: ", error);
      });

  }

  public addTask() {
    const options = {
      title: 'Add task',
      okButtonText: 'Add',
      cancelButtonText: 'Cancel',
      inputType: Dialogs.inputType.text
    };

    Dialogs.prompt(options).then((result: Dialogs.PromptResult) => {
      if (!result.result) return;

      const data = {
        text: result.text,
        completed: false
      };

      this.http.post('https://rocky-beach-17461.herokuapp.com/tasks', data, this.options)
      .map(result => result.json())
      .subscribe(result => {
        console.log("RESULT: ", result);
        this.tasks = this.tasks.concat([new Task(result['_id'], result['text'], result['completed'])]);
      }, error => {
        console.log("ERROR: ", error);
      })
    });
  }

  onSearch(args) {
    const searchBar = <SearchBar>args.object;
    this.searchText = searchBar.text;
  }

  onClearSearch() {
    this.searchText = '';
  }

  public onItemTap(args) {
    const item = this.tasks[args.index];
    this.completeTask(item);
  }

  public onRightSwipe(args) {
    console.log('onRightSwipe');
  }

  private completeTask(item: Task) {
    item.completed = true;
    this.http.put(`https://rocky-beach-17461.herokuapp.com/tasks/${item.id}`, item, this.options)
      .map(result => result.json())
      .subscribe(result => {
        console.log("RESULT: ", result);
      }, error => {
        console.log("ERROR: ", error);
      });
  }

}
