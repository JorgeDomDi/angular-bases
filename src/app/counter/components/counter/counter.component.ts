import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number=10;
  public addCounter(){
    this.counter+=1;
  }
  public minCounter(){
    this.counter-=1;
  }
  reset() {
   this.counter=10;
    }
}
