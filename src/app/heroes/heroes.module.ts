import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent

  ],
  imports: [
    CommonModule /* Para poder utilizar el ngIf y ngFor etc es necesiario importar el CommonModule en el module del componente */
  ]
})
export class HeroesModules{

}

/* Escribiendo a-module escribe el código anterior */
