

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  
})

export class HeroComponent  {

   name:string;
    age:number;
 
constructor(){
this.name="Ironman";
this.age=45;


}
 get capitalizedName():string{
  return this.name.toUpperCase()
}
 getHeroDescription():string{
  return this.name+" "+this.age
}
 changeHero():void{
  this.name="Peter Parker"
}
 changeAge():void{
  this.age=29
}
 reset() {
  // this.name="Ironman";
  this.age=45;
  document.querySelectorAll('td')!.forEach(element=>{
    element.setAttribute("style","color:red")
  })
  }
}
