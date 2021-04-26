import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BallGameFormComponent } from './ball-game-form.component';

describe('BallGameFormComponent', () => {
  let component: BallGameFormComponent;
  let fixture: ComponentFixture<BallGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallGameFormComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
