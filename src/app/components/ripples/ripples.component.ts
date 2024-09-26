import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { MatRipple, MatRippleModule, RippleAnimationConfig, RippleConfig } from '@angular/material/core';

@Component({
  selector: 'app-ripples',
  standalone: true,
  imports: [
    MatRippleModule
  ],
  templateUrl: './ripples.component.html',
  styleUrl: './ripples.component.scss'
})
export class RipplesComponent implements AfterViewInit {

  /**
   *
   */
  constructor() {

  }

  centered: boolean = true;
  disabled: boolean = false;
  unbounded: boolean = false;
  radius: number = 0;
  color: string = "pink";

  @ViewChild(MatRipple) ripple!: MatRipple;

  launchRipple() {

    const rippleAnimationConfig: RippleAnimationConfig = {
      enterDuration:100 ,
      exitDuration:1000000
    };

    const rippleConfig: RippleConfig = {
      color: "pink",
      centered: true,
      radius: 100,
      persistent: true,
      animation: rippleAnimationConfig
    };
    const rippleRef = this.ripple.launch(rippleConfig);

    rippleRef.fadeOut();
  }

  ngAfterViewInit(): void {

    this.ripple
  }



}
