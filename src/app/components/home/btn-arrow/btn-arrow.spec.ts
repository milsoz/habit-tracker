import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDown } from './btn-arrow';

describe('BtnDown', () => {
  let component: BtnDown;
  let fixture: ComponentFixture<BtnDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDown],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnDown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
