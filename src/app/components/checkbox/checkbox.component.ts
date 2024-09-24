import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-checkbox',
  standalone: true,
  styleUrl: './checkbox.component.scss',
  templateUrl: './checkbox.component.html',
  imports: [
    MatCheckboxModule,
    FormsModule
  ],
})
export class CheckboxComponent {

  writeConsole(): void {
    console.log("lmslmpapodmapsdmaopdmop");
  }
}