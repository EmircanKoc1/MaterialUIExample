import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogPosition, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
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
    const dialogRef = this.dialog.open(DialogviewComponent, {
      data: {
        name: "emircan"
      },
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
      minHeight: 500,
      minWidth: 500,
      hasBackdrop: true,
      autoFocus: true,
      // backdropClass:"backdropclass",
      
    });



    dialogRef.afterOpened().subscribe(() => console.log("dialog açıldı"))
    dialogRef.afterClosed().subscribe(() => console.log("dialog kapandı"))
    dialogRef.backdropClick().subscribe((data) => console.log(data.layerX))

    // const dialogPosition: DialogPosition = {
    //   top: "100px",
    //   bottom: "100px",
    //   right :"100px",
    //   left : "100px"
    // }

    // dialogRef.updatePosition(dialogPosition);


  }


}
