import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepIcon } from './sleep-svg';

describe('SleepIcon', () => {
  let component: SleepIcon;
  let fixture: ComponentFixture<SleepIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleepIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(SleepIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
