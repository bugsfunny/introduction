import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';
import { ConfirmDirective } from './confirm.directive';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoOpenDirective,
    ConfirmDirective,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
