import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progressspinner',
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ],
  templateUrl: './progressspinner.component.html',
  styleUrl: './progressspinner.component.scss'
})
export class ProgressspinnerComponent {

}
