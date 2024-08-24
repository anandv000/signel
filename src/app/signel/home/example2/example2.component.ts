import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class Example2Component {

  //Update method//

  number = signal(0);

  inc() {
    this.number.update(value => value+1)
  } 

  dec() {
    this.number.update(value => value-1)
  }

}
