import { Component } from '@angular/core';
import { MatSliderModule, MatSliderThumb } from '@angular/material/slider';

@Component({
  selector: 'app-slidetoggle',
  standalone: true,
  imports: [
    MatSliderModule
  ],
  templateUrl: './slidetoggle.component.html',
  styleUrl: './slidetoggle.component.scss'
})
export class SlidetoggleComponent {
  value: string = "1000";

  valueChange(eventValue: number): void {
    console.log(eventValue);
  }

}
