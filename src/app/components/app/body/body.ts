import { Component, EventEmitter, INJECTOR, Input, Output, signal } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [WaterSvg, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  @Input() changeGlassesFull!: (amount: number) => void;
  @Input() glassesFull: number = 0;
  @Input() changeSteps!: (amount: number) => void;
  @Input() steps: number = 0;
  @Input() changeSleepTime!: (time: string) => void;
  @Input() sleepTime: string = '';
  @Input() exerciseDescription: string = '';
  @Input() changeExerciseDescription!: (exerciseDescription: string) => void;

  exerciseInputValue: string = '';

  onEnter(value: string) {
    this.changeExerciseDescription(value);

    this.exerciseInputValue = '';
  }

  glasses = Array(8).fill(0);
}
