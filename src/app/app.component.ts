import { CounterModule } from './counter/counter.module';

import { Component } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Hola Mundo';


}
