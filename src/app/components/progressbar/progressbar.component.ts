import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatDividerModule
  ],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  public value: number = 0;

  incrementValue(): void {
    this.value += 10;
  }
  decrementValue(): void {
    this.value -= 10;
  }
  animationEnded(){
    console.log("animation ended")
  }

}
