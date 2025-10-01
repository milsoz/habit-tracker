import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  imports: [CommonModule],
  templateUrl: './goals.html',
  styleUrl: './goals.scss',
})
export class Goals {
  @Input() setGoals!: (newGoal: string) => void;
  @Input() goals: string[] = [];
  @Input() setCurrentGoal!: (goal: string) => void;
  @Input() currentGoal: string = '';
  @Input() setNewLearned!: (learned: string) => void;
  @Input() newLearned: string = '';
  @Input() practiceDescription: string = '';
  @Input() setPracticeDescription!: (practiceDescription: string) => void;

  practiceInputValue: string = '';
  newLearnedInputValue: string = '';

  onEnterGoal(goal: string) {
    this.setGoals(goal);
  }

  onEnterPractice(value: string) {
    this.setPracticeDescription(value);

    this.practiceInputValue = '';
  }

  onEnterLearned(value: string) {
    this.setNewLearned(value);

    this.newLearnedInputValue = '';
  }

  onGoalChange(e: Event) {
    const target = e.target as HTMLSelectElement;

    this.setCurrentGoal(target.value);
  }
}
