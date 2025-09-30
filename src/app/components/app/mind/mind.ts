import { Component, Input } from '@angular/core';
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
  @Input() setMoodRating!: (rating: number) => void;
  @Input() restDescription: string = '';
  @Input() setRestDescription!: (dayDescription: string) => void;
  @Input() dayDescription: string = '';
  @Input() setDayDescription!: (dayDescription: string) => void;

  @Input() stressLevel: number = 0;
  @Input() setStressLevel!: (amount: number) => void;

  dayDescriptionInputValue: string = '';
  restDescriptionInputValue: string = '';

  onEnterRest(value: string) {
    this.setRestDescription(value);

    this.restDescriptionInputValue = '';
  }

  onEnterDay(value: string) {
    this.setDayDescription(value);

    this.restDescriptionInputValue = '';
  }

  stressLevels = Array(10).fill(0);
  ratings = ['😭', '🙁', '😐', '🙂', '😁'];
}
