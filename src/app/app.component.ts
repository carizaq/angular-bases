import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = '- Mi primera APP -';
  public heroNames: string[] =['Spiderman','Hulk','Dr Strange','Black Widow','Thor'];
  public deletedHeroe?: string;

  removeLastHero():void{
    this.deletedHeroe = this.heroNames.pop();
    console.log(this.deletedHeroe);
  }
}
