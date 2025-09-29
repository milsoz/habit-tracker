import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { Body } from '../body/body';
import { Mind } from '../mind/mind';
import { Goals } from '../goals/goals';

@Component({
  selector: 'app-menu',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [DatePickerModule, FormsModule, Body, Mind, Goals],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  dateValue!: Date;
  selectedMenuIndex = signal(1);
  glassesFull = signal(0);
  steps = signal(0);
  sleepTime = signal('');

  changeGlassesFull = (amount: number) => {
    this.glassesFull.set(amount);
  };

  changeSteps = (amount: number) => {
    this.steps.set(amount);
  };

  changeSleepTime = (time: string) => {
    this.sleepTime.set(time);
  };

  changeIndex = (i: number) => {
    this.selectedMenuIndex.set(i);
  };
}
