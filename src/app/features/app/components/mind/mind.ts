import { Component } from '@angular/core';
import { StressSvg } from '../stress-svg/stress-svg';
import { MenuDataService } from '../../services/menu-data';

@Component({
  selector: 'app-mind',
  imports: [StressSvg],
  templateUrl: './mind.html',
  styleUrl: './mind.scss',
})
export class Mind {
  dayDescriptionInputValue: string = '';
  restDescriptionInputValue: string = '';
  stressLevels = Array(10).fill(0);
  ratings = ['😭', '🙁', '😐', '🙂', '😁'];

  constructor(public data: MenuDataService) {}

  onEnterRest(value: string) {
    this.data.restDescription.set(value);
    this.restDescriptionInputValue = '';
  }

  onEnterDay(value: string) {
    this.data.dayDescription.set(value);
    this.dayDescriptionInputValue = '';
  }

  onChangeStress(value: number) {
    this.data.stressLevel.set(value);
  }

  onChangeMoodRating(value: number) {
    this.data.moodRating.set(value);
  }

  getMoodLabel(index: number): string {
    const labels = ['Very sad', 'Sad', 'Neutral', 'Happy', 'Very happy'];
    return labels[index] || 'Unknown mood';
  }
}
