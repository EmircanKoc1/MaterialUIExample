import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-buttontoggle',
  standalone: true,
  styleUrl: './buttontoggle.component.scss',
  templateUrl: './buttontoggle.component.html',
  imports: [
    MatButtonToggleModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtontoggleComponent {
  hideSingleSelectionIndicator = signal(false);


  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  
}
