import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensionpanelComponent } from './expensionpanel.component';

describe('ExpensionpanelComponent', () => {
  let component: ExpensionpanelComponent;
  let fixture: ComponentFixture<ExpensionpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensionpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
