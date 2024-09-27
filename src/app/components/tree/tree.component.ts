import { Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [
    MatTreeModule
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {

}
