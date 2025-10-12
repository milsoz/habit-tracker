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
    this.data.setExerciseDescription(value);
    this.exerciseInputValue = '';
  }

  onChangeGlassesFull(amount: number) {
    this.data.setGlassesFull(amount);
  }

  onChangeSteps(amount: number) {
    if (amount < 0) {
      this.data.setSteps(amount * -1);
    } else {
      this.data.setSteps(amount);
    }
  }

  onEnterSleepTIme(time: string) {
    this.data.setSleepTime(time);
  }

  glasses = [0, 1, 2, 3, 4, 5, 6, 7];
}
