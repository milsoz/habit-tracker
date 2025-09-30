import { Component, Input } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [WaterSvg, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  @Input() setGlassesFull!: (amount: number) => void;
  @Input() glassesFull: number = 0;
  @Input() setSteps!: (amount: number) => void;
  @Input() steps: number = 0;
  @Input() setSleepTime!: (time: string) => void;
  @Input() sleepTime: string = '';
  @Input() exerciseDescription: string = '';
  @Input() setExerciseDescription!: (exerciseDescription: string) => void;

  exerciseInputValue: string = '';

  onEnter(value: string) {
    this.setExerciseDescription(value);

    this.exerciseInputValue = '';
  }

  glasses = Array(8).fill(0);
}
