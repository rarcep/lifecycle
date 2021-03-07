import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { NuestraNombreComponent } from './components/nuestra-nombre/nuestra-nombre.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    NuestraNombreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
