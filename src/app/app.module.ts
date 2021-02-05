import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { CounterButtonComponentComponent } from './counter-button-component/counter-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInfoComponent,
    CounterButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
