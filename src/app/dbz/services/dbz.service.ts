import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: "Krilin",
    power: 1000,
  },
  {
    id: uuid(),
    name: "Goku",
    power: 950,
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 9000
  }
];


onNewCharacter(character: Character): void {
  console.log("Main Page");
  console.log(character);

  const newCharacter: Character = {id: uuid(), ...character}


  this.character.push(newCharacter);


}

eliminarCharacter(index: number): void{
  this.character.splice(index, 1);
}

deleteById(id: string): void{
  this.character = this.character.filter(character => character.id !== id);
}

}
