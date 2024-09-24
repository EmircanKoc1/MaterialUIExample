import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogview',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './dialogview.component.html',
  styleUrl: './dialogview.component.scss'
})
export class DialogviewComponent {
  readonly dialogRef = inject(MatDialogRef<DialogviewComponent>);

}
