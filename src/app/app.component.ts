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
import { ListComponent } from "./components/list/list.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressspinnerComponent } from './components/progressspinner/progressspinner.component';
import { RadioComponent } from './components/radio/radio.component';
import { RipplesComponent } from "./components/ripples/ripples.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SlidetoggleComponent } from './components/slidetoggle/slidetoggle.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarCustomComponent } from './components/snackbar/snackbarwithcustomcomponent/snackbar-custom/snackbar-custom.component';
import { TreeComponent } from './components/tree/tree.component';
import { TabsComponent } from './components/tabs/tabs.component';



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
    IconComponent,
    ListComponent,
    PaginatorComponent,
    ProgressbarComponent,
    ProgressspinnerComponent,
    RadioComponent,
    RipplesComponent,
    SidenavComponent,
    SlidetoggleComponent,
    SnackbarComponent,
    SnackbarCustomComponent,
    TreeComponent,
    TabsComponent
],
})
export class AppComponent {
  title = 'MaterialUIExample';
}
