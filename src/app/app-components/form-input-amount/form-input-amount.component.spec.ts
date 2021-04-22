import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputAmountComponent } from './form-input-amount.component';

describe('FormInputAmountComponent', () => {
  let component: FormInputAmountComponent;
  let fixture: ComponentFixture<FormInputAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
