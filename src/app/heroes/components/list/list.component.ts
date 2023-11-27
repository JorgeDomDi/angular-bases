import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroesName:string[]=["Iroman","Spiderman","Hulk","Thor"]
heroeBorrado?: string="";

eliminarHeroe(indice:number){
  this.heroesName.splice(indice,1);
}
eliminarUltimoHeroe() {
  this.heroeBorrado=  this.heroesName.pop();

setTimeout(() => {
  this.heroeBorrado=""
}, 2000);

}



}
