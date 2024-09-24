import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  imports: [
    MatListModule,
    MatDividerModule
  ],
})
export class DividerComponent {

}
