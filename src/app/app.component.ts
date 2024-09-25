import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeComponent } from "./components/badge/badge.component";
import { ButtonComponent } from "./components/button/button.component";
import { ButtontoggleComponent } from './components/buttontoggle/buttontoggle.component';
import { CardComponent } from "./components/card/card.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DividerComponent } from "./components/dialog/divider/divider.component";
import { ExpensionpanelComponent } from './components/expensionpanel/expensionpanel.component';
import { GridComponent } from './components/grid/grid.component';
import { IconComponent } from './components/icon/icon.component';

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
    ButtontoggleComponent,
    CardComponent,
    CheckboxComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    DividerComponent,
    ExpensionpanelComponent,
    GridComponent,
    IconComponent
],
})
export class AppComponent {
  title = 'MaterialUIExample';
}
