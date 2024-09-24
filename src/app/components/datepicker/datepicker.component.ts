import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers:[
    provideNativeDateAdapter()
  ]
})
export class DatepickerComponent {

}
