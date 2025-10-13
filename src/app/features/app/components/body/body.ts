import { Component } from '@angular/core';
import { MenuDataService } from '../../services/menu-data';

@Component({
  selector: 'app-body',
  templateUrl: './body.html',
  imports: [],
  styleUrl: './body.scss',
})
export class Body {
  constructor(public data: MenuDataService) {}

  exerciseInputValue: string = '';

  onEnterExercise(value: string) {
    this.data.exerciseDescription.set(value);
    this.exerciseInputValue = '';
  }

  onChangeGlassesFull(amount: number) {
    this.data.glassesFull.set(amount);
  }

  onChangeSteps(amount: number) {
    if (amount < 0) {
      this.data.steps.set(amount * -1);
    } else {
      this.data.steps.set(amount);
    }
  }

  onEnterSleepTime(time: string) {
    this.data.sleepTime.set(time);
  }

  glasses = [0, 1, 2, 3, 4, 5, 6, 7];
}
