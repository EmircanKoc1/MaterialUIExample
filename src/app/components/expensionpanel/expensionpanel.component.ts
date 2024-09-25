import { Component, viewChild } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-expensionpanel',
  standalone: true,
  imports: [MatExpansionModule, MatButtonModule],
  templateUrl: './expensionpanel.component.html',
  styleUrl: './expensionpanel.component.scss'
})
export class ExpensionpanelComponent {
   accordion = viewChild.required(MatAccordion);

  openAll(): void {

    this.accordion().openAll();
  }
  closeAll(): void {

    this.accordion().closeAll();
  }

}
