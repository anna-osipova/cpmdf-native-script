"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Dialogs = require("ui/dialogs");
require("rxjs/Rx");
var Task = (function () {
    function Task(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
    return Task;
}());
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.searchText = '';
        this.tasks = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic YW5uYTp3ZXJlLWtlcHQtZmlndXJl');
        this.options = new http_1.RequestOptions({ headers: headers });
        this.http.get('https://rocky-beach-17461.herokuapp.com/tasks', this.options)
            .map(function (result) { return result.json(); })
            .do(function (result) { return console.log("RESULT: ", JSON.stringify(result)); })
            .subscribe(function (result) {
            result.forEach(function (entry) {
                _this.tasks = _this.tasks.concat([new Task(entry['_id'], entry['text'], entry['completed'])]);
            });
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    AppComponent.prototype.addTask = function () {
        var _this = this;
        var options = {
            title: 'Add task',
            okButtonText: 'Add',
            cancelButtonText: 'Cancel',
            inputType: Dialogs.inputType.text
        };
        Dialogs.prompt(options).then(function (result) {
            if (!result.result)
                return;
            var data = {
                text: result.text,
                completed: false
            };
            _this.http.post('https://rocky-beach-17461.herokuapp.com/tasks', data, _this.options)
                .map(function (result) { return result.json(); })
                .subscribe(function (result) {
                console.log("RESULT: ", result);
                _this.tasks = _this.tasks.concat([new Task(result['_id'], result['text'], result['completed'])]);
            }, function (error) {
                console.log("ERROR: ", error);
            });
        });
    };
    AppComponent.prototype.onSearch = function (args) {
        var searchBar = args.object;
        this.searchText = searchBar.text;
    };
    AppComponent.prototype.onClearSearch = function () {
        this.searchText = '';
    };
    AppComponent.prototype.onItemTap = function (args) {
        var item = this.tasks[args.index];
        this.completeTask(item);
    };
    AppComponent.prototype.onRightSwipe = function (args) {
        console.log('onRightSwipe');
    };
    AppComponent.prototype.completeTask = function (item) {
        item.completed = true;
        this.http.put("https://rocky-beach-17461.herokuapp.com/tasks/" + item.id, item, this.options)
            .map(function (result) { return result.json(); })
            .subscribe(function (result) {
            console.log("RESULT: ", result);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQThEO0FBQzlELG9DQUFzQztBQUN0QyxtQkFBaUI7QUFHakI7SUFDRSxjQUNTLEVBQVUsRUFDVixJQUFZLEVBQ1osU0FBa0I7UUFGbEIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUksQ0FBQztJQUNsQyxXQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFNRCxJQUFhLFlBQVk7SUFLdkIsc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0NBQStDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN6RSxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2FBQzVCLEVBQUUsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBL0MsQ0FBK0MsQ0FB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SUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMxRixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQWIsQ0FBYSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQUFDLEFBbkZELElBbUZDO0FBbkZZLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEMsQ0FBQztxQ0FNMEIsV0FBSTtHQUxuQixZQUFZLENBbUZ4QjtBQW5GWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcbmltcG9ydCBcInJ4anMvUnhcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhcic7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nLFxuICAgIHB1YmxpYyBjb21wbGV0ZWQ6IGJvb2xlYW4pIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgdGFza3M6IEFycmF5PFRhc2s+O1xuICBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucztcbiAgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgWVc1dVlUcDNaWEpsTFd0bGNIUXRabWxuZFhKbCcpO1xuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnMgfSk7XG5cbiAgICB0aGlzLmh0dHAuZ2V0KCdodHRwczovL3JvY2t5LWJlYWNoLTE3NDYxLmhlcm9rdWFwcC5jb20vdGFza3MnLCB0aGlzLm9wdGlvbnMpXG4gICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuanNvbigpKVxuICAgICAgLmRvKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhcIlJFU1VMVDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKVxuICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICByZXN1bHQuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5jb25jYXQoW25ldyBUYXNrKGVudHJ5WydfaWQnXSwgZW50cnlbJ3RleHQnXSwgZW50cnlbJ2NvbXBsZXRlZCddKV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gIH1cblxuICBwdWJsaWMgYWRkVGFzaygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgdGl0bGU6ICdBZGQgdGFzaycsXG4gICAgICBva0J1dHRvblRleHQ6ICdBZGQnLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICBpbnB1dFR5cGU6IERpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICB9O1xuXG4gICAgRGlhbG9ncy5wcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBEaWFsb2dzLlByb21wdFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKCFyZXN1bHQucmVzdWx0KSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHRleHQ6IHJlc3VsdC50ZXh0LFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cHM6Ly9yb2NreS1iZWFjaC0xNzQ2MS5oZXJva3VhcHAuY29tL3Rhc2tzJywgZGF0YSwgdGhpcy5vcHRpb25zKVxuICAgICAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRVNVTFQ6IFwiLCByZXN1bHQpO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5jb25jYXQoW25ldyBUYXNrKHJlc3VsdFsnX2lkJ10sIHJlc3VsdFsndGV4dCddLCByZXN1bHRbJ2NvbXBsZXRlZCddKV0pO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIiwgZXJyb3IpO1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VhcmNoKGFyZ3MpIHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaEJhci50ZXh0O1xuICB9XG5cbiAgb25DbGVhclNlYXJjaCgpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSAnJztcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnRhc2tzW2FyZ3MuaW5kZXhdO1xuICAgIHRoaXMuY29tcGxldGVUYXNrKGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIG9uUmlnaHRTd2lwZShhcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ29uUmlnaHRTd2lwZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wbGV0ZVRhc2soaXRlbTogVGFzaykge1xuICAgIGl0ZW0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0aGlzLmh0dHAucHV0KGBodHRwczovL3JvY2t5LWJlYWNoLTE3NDYxLmhlcm9rdWFwcC5jb20vdGFza3MvJHtpdGVtLmlkfWAsIGl0ZW0sIHRoaXMub3B0aW9ucylcbiAgICAgIC5tYXAocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVTVUxUOiBcIiwgcmVzdWx0KTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==