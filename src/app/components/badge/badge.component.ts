import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class BadgeComponent {

}
