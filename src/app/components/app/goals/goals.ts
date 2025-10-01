import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  imports: [CommonModule],
  templateUrl: './goals.html',
  styleUrl: './goals.scss',
})
export class Goals {
  @Input() currentGoal: string = '';
  @Input() goals: string[] = [];
  @Input() practiceDescription: string = '';
  @Input() newLearned: string = '';

  @Output() goalAdded = new EventEmitter<string>();
  @Output() currentGoalChanged = new EventEmitter<string>();
  @Output() practiceChanged = new EventEmitter<string>();
  @Output() learnedAdded = new EventEmitter<string>();

  practiceInputValue: string = '';
  newLearnedInputValue: string = '';

  onEnterGoal(goal: string) {
    this.goalAdded.emit(goal);
  }

  onEnterPractice(value: string) {
    this.practiceChanged.emit(value);
    this.practiceInputValue = '';
  }

  onEnterLearned(value: string) {
    this.learnedAdded.emit(value);
    this.newLearnedInputValue = '';
  }

  onGoalChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.currentGoalChanged.emit(target.value);
  }
}
