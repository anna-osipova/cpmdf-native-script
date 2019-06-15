import {NgModule} from "@angular/core";
import {LISTVIEW_DIRECTIVES} from "nativescript-telerik-ui/listview/angular";

@NgModule({
  declarations: [
    LISTVIEW_DIRECTIVES
  ],
  exports: [
    LISTVIEW_DIRECTIVES
  ]
})
export class SharedDirectivesModule {}
