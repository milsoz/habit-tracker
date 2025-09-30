import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { Body } from '../body/body';
import { Mind } from '../mind/mind';
import { Goals } from '../goals/goals';
import { MenuData } from './menuData';

@Component({
  selector: 'app-menu',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [DatePickerModule, FormsModule, Body, Mind, Goals],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  menuData = new MenuData();

  onDateChange = (event: any) => {
    this.menuData.loadDataForDate(event.value);
  };
}
