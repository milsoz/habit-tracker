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
  dateValue: Date = new Date(Date.now());

  selectedMenuIndex = signal(1);
  glassesFull = signal(0);
  steps = signal(0);
  sleepTime = signal('');
  exerciseDescription = signal('');
  setGlassesFull = (amount: number) => {
    this.glassesFull.set(amount);
  };
  setSteps = (amount: number) => {
    this.steps.set(amount);
  };
  setSleepTime = (time: string) => {
    this.sleepTime.set(time);
  };
  setExerciseDescription = (exerciseDescription: string) => {
    this.exerciseDescription.set(exerciseDescription);
  };

  moodRating = signal(-1);
  restDescription = signal('');
  dayDescription = signal('');
  stressLevel = signal(0);
  setMoodRating = (rating: number) => {
    this.moodRating.set(rating);
  };
  setRestDescription = (restDescription: string) => {
    this.restDescription.set(restDescription);
  };
  setDayDescription = (dayDescription: string) => {
    this.dayDescription.set(dayDescription);
  };
  setStressLevel = (level: number) => {
    this.stressLevel.set(level);
  };

  setIndex = (i: number) => {
    this.selectedMenuIndex.set(i);
  };
}
