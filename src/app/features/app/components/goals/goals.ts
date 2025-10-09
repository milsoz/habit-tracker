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
    this.data.setGoals(goal);
  }

  onEnterPractice(value: string) {
    this.data.setPracticeDescription(value);
    this.practiceInputValue = '';
  }

  onEnterLearned(value: string) {
    this.data.setNewLearned(value);
    this.newLearnedInputValue = '';
  }

  onGoalChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.data.setCurrentGoal(target.value);
  }
}
