import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-works',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() /*Con esta propiedad define que es un atributoq que es posible que se rellene desde otro componente
  En caso que no reciba ningún valor por defecto mostrar el registro que nosotros hemos puesto
  Se puede dejar vacio, es decir sin valor y no mostraría nada
  En el main-page.component.html se realiza el volcado de los datos.*/
  public characterList: Character[] = [{name: "Trunk", power: 10}]

  @Output()
  //public indiceEliminar: EventEmitter<number> = new EventEmitter
  public idEliminar: EventEmitter<string> = new EventEmitter

  /*onDeleteCharacter(index:number):void {
    this.indiceEliminar.emit(index);
    console.log(index)
  }*/


  onDeleteCharacterById(id: string):void{
    this.idEliminar.emit(id);
  }





}
