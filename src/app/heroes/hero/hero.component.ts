import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:  string = "iroman";
  public age:   number = 23;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }


  getHeroDescription(): string{
   return `${ this.name } - ${ this.age }`;
   //Utilizar el `${} Permite utilizar valores dinamicos, realmente es lo mismo que concatenar con el "+", pero queda mejor visto utilizando el `${}`

  }

  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = "iroman";
    this.age = 23;
  }

}
