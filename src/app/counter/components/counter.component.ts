import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3>Contador: {{counter}}</h3>
    <button class="btn btn-outline-primary mx-2" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="reset()">reset</button>
    <button class="btn btn-outline-danger mx-2" (click)="decreaseBy(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter:number = 0;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 0;
  }

  decreaseBy(value:number):void{
    this.counter += value;
  }
}
