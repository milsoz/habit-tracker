import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [WaterSvg, CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  @Input() glassesFull: number = 0;
  @Input() steps: number = 0;
  @Input() exerciseDescription: string = '';
  @Input() sleepTime: string = '';

  @Output() glassesFullChanged = new EventEmitter<number>();
  @Output() exerciseDescriptionChanged = new EventEmitter();
  @Output() stepsChanged = new EventEmitter();
  @Output() sleepTimeChanged = new EventEmitter();

  exerciseInputValue: string = '';

  onEnterExercise(value: string) {
    this.exerciseDescriptionChanged.emit(value);
    this.exerciseInputValue = '';
  }

  onChangeGlassesFull(amount: number) {
    this.glassesFullChanged.emit(amount);
  }

  onChangeSteps(amount: number) {
    this.stepsChanged.emit(amount);
  }

  onEnterSleepTIme(time: string) {
    this.sleepTimeChanged.emit(time);
  }

  glasses = Array(8).fill(0);
}
