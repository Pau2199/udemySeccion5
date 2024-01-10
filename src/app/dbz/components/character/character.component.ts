import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {


  public character: Character  = {
    name: '',
    power: 0

  }

  @Output()
  public onNewCharacterHijo: EventEmitter<Character> = new EventEmitter


  emitCharacter(): void{
    //debugger; si escribimos debugger se para en el navegador y tienes las herramientas de depuración del navegador utilizado

    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacterHijo.emit(this.character);

    this.character = {name: '', power: 0};


  }

}
