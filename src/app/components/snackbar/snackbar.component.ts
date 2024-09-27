import { AfterViewChecked, AfterViewInit, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatButtonModule
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }

  private _snackBar = inject(MatSnackBar);
  private snackbarRef: MatSnackBarRef<TextOnlySnackBar> | null = null;

  openSnackBar(): void {

    this.snackbarRef = this._snackBar.open("snackbarmessage", "click", {
      duration: 3000
    });

    this.snackbarRef.afterOpened().subscribe(x => console.log("after opened log"));
    this.snackbarRef.afterDismissed().subscribe(x => console.log("after dismissed"));

  }

  closeSnackbar(): void {

    this.snackbarRef?.dismiss();

  }

}
