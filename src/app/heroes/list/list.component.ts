import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?:string;

  removeLastHero():void{
    //shitf remueve el primero y lo regresa
    //pop remueve el ultimo y lo regresa
    this.deletedHero = this.heroNames.pop();
    console.log(this.deletedHero)
  }
}
