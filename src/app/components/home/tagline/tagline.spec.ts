import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tagline } from './tagline';

describe('Tagline', () => {
  let component: Tagline;
  let fixture: ComponentFixture<Tagline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tagline],
    }).compileComponents();

    fixture = TestBed.createComponent(Tagline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
