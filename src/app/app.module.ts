import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnestheticComponent } from './anesthetic/anesthetic.component';
import { IntensiveComponent } from './intensive/intensive.component';
import { ProcedureComponent } from './procedure/procedure.component';

@NgModule({
  declarations: [
    AppComponent,
    AnestheticComponent,
    IntensiveComponent,
    ProcedureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
