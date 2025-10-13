import { Component } from '@angular/core';
import { MenuDataService } from '../../services/menu-data';

@Component({
  selector: 'app-goals',
  imports: [],
  templateUrl: './goals.html',
  styleUrl: './goals.scss',
})
export class Goals {
  practiceInputValue: string = '';
  newLearnedInputValue: string = '';

  constructor(public data: MenuDataService) {}

  onEnterGoal(goal: string) {
    this.data.goals.set([...this.data.goals(), goal]);
  }

  onEnterPractice(value: string) {
    this.data.practiceDescription.set(value);
    this.practiceInputValue = '';
  }

  onEnterLearned(value: string) {
    this.data.newLearned.set(value);
    this.newLearnedInputValue = '';
  }

  onGoalChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.data.currentGoal.set(target.value);
  }
}
