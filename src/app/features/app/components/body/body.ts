import { Component } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';
import { SleepSvg } from '../sleep-svg/sleep-svg';
import { MenuDataService } from '../../services/menu-data';

@Component({
  selector: 'app-body',
  imports: [WaterSvg, SleepSvg],
  templateUrl: './body.html',
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
    this.data.setSteps(amount);
  }

  onEnterSleepTIme(time: string) {
    this.data.setSleepTime(time);
  }

  glasses = Array(8).fill(0);
}
