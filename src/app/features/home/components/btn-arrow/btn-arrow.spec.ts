import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnArrow } from './btn-arrow';

describe('BtnArrow', () => {
  let component: BtnArrow;
  let fixture: ComponentFixture<BtnArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnArrow],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnArrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
