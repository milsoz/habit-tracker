import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-water-svg',
  imports: [],
  templateUrl: './water-svg.html',
  styleUrl: './water-svg.scss',
})
export class WaterSvg {
  @Input() isFull: boolean = false;
}
