import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarCustomViewComponent } from '../snackbar-custom-view/snackbar-custom-view.component';

@Component({
  selector: 'app-snackbar-custom',
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatButtonModule
  ],
  templateUrl: './snackbar-custom.component.html',
  styleUrl: './snackbar-custom.component.scss'
})
export class SnackbarCustomComponent {
  private _snackBar = inject(MatSnackBar);


  openSnackBar(): void {
    this._snackBar.openFromComponent(SnackbarCustomViewComponent, {
      duration: 2000
    });
    
  }

}
