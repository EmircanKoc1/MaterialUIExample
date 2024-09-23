import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeComponent } from "./components/badge/badge.component";
import { ButtonComponent } from "./components/button/button.component";
import { ButtontoggleComponent } from './components/buttontoggle/buttontoggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    BadgeComponent,
    ButtonComponent,
    ButtonComponent,
    ButtontoggleComponent
  
  ],
})
export class AppComponent {
  title = 'MaterialUIExample';
}
