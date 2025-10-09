import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { Body } from '../body/body';
import { Mind } from '../mind/mind';
import { Goals } from '../goals/goals';
import { MenuDataService } from '../../services/menu-data';

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
  constructor(public data: MenuDataService) {}
}
