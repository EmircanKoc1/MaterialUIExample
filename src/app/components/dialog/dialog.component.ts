import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogviewComponent } from './dialogview/dialogview.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogviewComponent, {
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

}
