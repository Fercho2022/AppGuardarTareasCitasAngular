import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListCitaComponent } from './components/list-cita/list-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCitaComponent,
    ListCitaComponent,

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
