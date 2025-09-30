import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stress-svg',
  imports: [],
  templateUrl: './stress-svg.html',
  styleUrl: './stress-svg.scss',
})
export class StressSvg {
  @Input() stressLevelIndex: number = 0;
  @Input() isActive: boolean = false;
}
