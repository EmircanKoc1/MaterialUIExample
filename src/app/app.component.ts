import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeComponent } from "./components/badge/badge.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MaterialUIExample';
}
