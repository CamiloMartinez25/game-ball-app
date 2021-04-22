import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMainSideComponent } from './layout-main-side.component';

describe('LayoutMainSideComponent', () => {
  let component: LayoutMainSideComponent;
  let fixture: ComponentFixture<LayoutMainSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMainSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMainSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
