import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { DailyData } from '../models/IDailyData';
import { isPlatformBrowser } from '@angular/common';
import { AppPage } from '../app-page/app-page';

@Injectable({
  providedIn: AppPage,
})
export class MenuDataService {
  dateValue: Date = new Date();

  selectedMenuIndex = signal(1);

  glassesFull = signal(0);
  steps = signal(0);
  sleepTime = signal('');
  exerciseDescription = signal('');

  moodRating = signal(-1);
  restDescription = signal('');
  dayDescription = signal('');
  stressLevel = signal(0);

  goals = signal<string[]>([]);
  currentGoal = signal('');
  practiceDescription = signal('');
  newLearned = signal('');

  dailyData: Record<string, DailyData> = {};

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedData = localStorage.getItem('dailyData');
      if (savedData) {
        this.dailyData = JSON.parse(savedData);
      }
    }
  }

  getDateKey(date: Date = this.dateValue): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private saveDataForDate = () => {
    const key = this.getDateKey(this.dateValue);
    this.dailyData[key] = {
      glassesFull: this.glassesFull(),
      steps: this.steps(),
      sleepTime: this.sleepTime(),
      exerciseDescription: this.exerciseDescription(),
      moodRating: this.moodRating(),
      restDescription: this.restDescription(),
      dayDescription: this.dayDescription(),
      stressLevel: this.stressLevel(),
      goals: this.goals(),
      currentGoal: this.currentGoal(),
      practiceDescription: this.practiceDescription(),
      newLearned: this.newLearned(),
    };
    localStorage.setItem('dailyData', JSON.stringify(this.dailyData));
  };

  setSignal = <T>(signalRef: { set: (v: T) => void }, value: T) => {
    signalRef.set(value);
    this.saveDataForDate();
  };

  setGoals = (newGoal: string) => {
    this.goals.update((current) => [...current, newGoal]);
    this.saveDataForDate();
  };

  setGlassesFull = (amount: number) => this.setSignal(this.glassesFull, amount);
  setSteps = (amount: number) => this.setSignal(this.steps, amount);
  setSleepTime = (time: string) => this.setSignal(this.sleepTime, time);
  setExerciseDescription = (desc: string) => this.setSignal(this.exerciseDescription, desc);
  setMoodRating = (rating: number) => this.setSignal(this.moodRating, rating);
  setRestDescription = (desc: string) => this.setSignal(this.restDescription, desc);
  setDayDescription = (desc: string) => this.setSignal(this.dayDescription, desc);
  setStressLevel = (level: number) => this.setSignal(this.stressLevel, level);
  setCurrentGoal = (goal: string) => this.setSignal(this.currentGoal, goal);
  setPracticeDescription = (practice: string) => this.setSignal(this.practiceDescription, practice);
  setNewLearned = (learned: string) => this.setSignal(this.newLearned, learned);
  setIndex = (i: number) => this.setSignal(this.selectedMenuIndex, i);

  loadDataForDate = (date: Date) => {
    this.dateValue = date;
    const key = this.getDateKey(date);
    let data = this.dailyData[key];

    if (!data) {
      data = {
        glassesFull: 0,
        steps: 0,
        sleepTime: '',
        exerciseDescription: '',
        moodRating: -1,
        restDescription: '',
        dayDescription: '',
        stressLevel: 0,
        goals: [],
        currentGoal: '',
        practiceDescription: '',
        newLearned: '',
      };
      this.dailyData[key] = data;
    }

    this.glassesFull.set(data.glassesFull);
    this.steps.set(data.steps);
    this.sleepTime.set(data.sleepTime);
    this.exerciseDescription.set(data.exerciseDescription);
    this.moodRating.set(data.moodRating);
    this.restDescription.set(data.restDescription);
    this.dayDescription.set(data.dayDescription);
    this.stressLevel.set(data.stressLevel);

    this.currentGoal.set(data.currentGoal);
    this.practiceDescription.set(data.practiceDescription);
    this.newLearned.set(data.newLearned);
  };
}
