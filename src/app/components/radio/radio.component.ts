import { Component } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [
    MatRadioModule
  ],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {

  radioButtonChanged(event: MatRadioChange): void {
    console.log(event);
  }

}
