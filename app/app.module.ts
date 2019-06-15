import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { FilterPipe } from './filter.pipe';
import { SharedDirectivesModule } from './shared-directives.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    SharedDirectivesModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
