import { signal } from '@angular/core';

export class MenuData {
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

  dailyData: Record<string, any> = {};

  setGlassesFull = (amount: number) => {
    this.glassesFull.set(amount);
    this.saveDataForDate();
  };

  setSteps = (amount: number) => {
    this.steps.set(amount);
    this.saveDataForDate();
  };

  setSleepTime = (time: string) => {
    this.sleepTime.set(time);
    this.saveDataForDate();
  };

  setExerciseDescription = (desc: string) => {
    this.exerciseDescription.set(desc);
    this.saveDataForDate();
  };

  setMoodRating = (rating: number) => {
    this.moodRating.set(rating);
    this.saveDataForDate();
  };

  setRestDescription = (desc: string) => {
    this.restDescription.set(desc);
    this.saveDataForDate();
  };

  setDayDescription = (desc: string) => {
    this.dayDescription.set(desc);
    this.saveDataForDate();
  };

  setStressLevel = (level: number) => {
    this.stressLevel.set(level);
    this.saveDataForDate();
  };

  setIndex = (i: number) => {
    this.selectedMenuIndex.set(i);
    this.saveDataForDate();
  };

  private saveDataForDate = () => {
    const key = this.dateValue.toISOString().split('T')[0];
    this.dailyData[key] = {
      glassesFull: this.glassesFull(),
      steps: this.steps(),
      sleepTime: this.sleepTime(),
      exerciseDescription: this.exerciseDescription(),
      moodRating: this.moodRating(),
      restDescription: this.restDescription(),
      dayDescription: this.dayDescription(),
      stressLevel: this.stressLevel(),
    };
  };

  loadDataForDate = (date: Date) => {
    this.dateValue = date;
    const key = date.toISOString().split('T')[0];
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
  };
}
