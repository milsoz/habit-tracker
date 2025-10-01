import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StressSvg } from '../stress-svg/stress-svg';

@Component({
  selector: 'app-mind',
  imports: [CommonModule, StressSvg],
  templateUrl: './mind.html',
  styleUrl: './mind.scss',
})
export class Mind {
  @Input() moodRating: number = -1;
  @Input() stressLevel: number = 0;
  @Input() restDescription: string = '';
  @Input() dayDescription: string = '';

  @Output() restDescriptionAdded = new EventEmitter<string>();
  @Output() dayDescriptionAdded = new EventEmitter<string>();
  @Output() stressLevelChanged = new EventEmitter<number>();
  @Output() moodRatingChanged = new EventEmitter<number>();

  dayDescriptionInputValue: string = '';
  restDescriptionInputValue: string = '';

  onEnterRest(value: string) {
    this.restDescriptionAdded.emit(value);

    this.restDescriptionInputValue = '';
  }

  onEnterDay(value: string) {
    this.dayDescriptionAdded.emit(value);

    this.restDescriptionInputValue = '';
  }

  onChangeStress(value: number) {
    this.stressLevelChanged.emit(value);
  }

  onChangeMoodRating(value: number) {
    this.moodRatingChanged.emit(value);
  }

  stressLevels = Array(10).fill(0);
  ratings = ['😭', '🙁', '😐', '🙂', '😁'];
}
