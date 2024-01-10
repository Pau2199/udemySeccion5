import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './Counter/counter.module';
import { HeroesModules } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModules,
    DbzModule //En el MODULO PADRE se deben IMPORTAR los modulos hijos para que podras hacer a los componentes de los hijos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
