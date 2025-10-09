import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StressSvg } from './stress-svg';

describe('StressSvg', () => {
  let component: StressSvg;
  let fixture: ComponentFixture<StressSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StressSvg],
    }).compileComponents();

    fixture = TestBed.createComponent(StressSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
