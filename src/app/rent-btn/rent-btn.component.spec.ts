import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentBtnComponent } from './rent-btn.component';

describe('RentBtnComponent', () => {
  let component: RentBtnComponent;
  let fixture: ComponentFixture<RentBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentBtnComponent]
    });
    fixture = TestBed.createComponent(RentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
