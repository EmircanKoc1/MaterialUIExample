import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';


export interface DialogData {
  name: string;
}


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
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly name = this.data.name;

  closeDialog(): void {

    this.dialogRef.close();
  }
}
