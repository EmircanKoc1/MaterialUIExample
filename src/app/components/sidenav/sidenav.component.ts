import { BooleanInput } from '@angular/cdk/coercion';
import { Component, ViewChild, viewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  opened: BooleanInput = true;

  @ViewChild(MatDrawer) matDrawerRef!: MatDrawer;
  @ViewChild(MatDrawerContainer) matDrawerContainerRef!: MatDrawerContainer;


  constructor() {
  }

  openSideNav(): void {
    // this.opened = !this.opened;

    this.matDrawerRef.open();

  }

  closeSideNav(): void {


    this.matDrawerRef.close();
    this.matDrawerContainerRef.close();
  }



}
