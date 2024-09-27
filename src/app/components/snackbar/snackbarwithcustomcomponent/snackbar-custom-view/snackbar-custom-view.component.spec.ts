import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCustomViewComponent } from './snackbar-custom-view.component';

describe('SnackbarCustomViewComponent', () => {
  let component: SnackbarCustomViewComponent;
  let fixture: ComponentFixture<SnackbarCustomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarCustomViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarCustomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
