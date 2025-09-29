import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mind } from './mind';

describe('Mind', () => {
  let component: Mind;
  let fixture: ComponentFixture<Mind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
