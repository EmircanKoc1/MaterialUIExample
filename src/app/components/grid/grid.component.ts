import { Component } from '@angular/core';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

}
