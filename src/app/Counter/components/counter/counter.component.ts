import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
  <h4>Counter: {{counter}}</h4>

  <button (click)="subirContador('+')">+1</button>
  <button (click)="resetContador()">Reset</button>
  <button (click)="subirContador('-')">-1</button>
  `,
})
export class CounterComponent{
  public counter: number = 10;


  subirContador(signo: string): void {
    if(signo === '+'){
      this.counter +=1;
    }else{
      this.counter -=1
    }
  }

  private static CONTADOR_DEFECTO: number = 10;
  resetContador(): void{
    this.counter = CounterComponent.CONTADOR_DEFECTO;
  }

}


//Ejecuanto el snipets a-component y al tabular escribe el código totalmente solo sin necesidad de escribrirlo de memoria ni realizar copia pega
