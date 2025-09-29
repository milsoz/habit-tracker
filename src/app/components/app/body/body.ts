import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';

@Component({
  selector: 'app-body',
  imports: [WaterSvg],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  @Input() changeGlassesFull!: (amount: number) => void;
  @Input() glassesFull: number = 0;
  @Input() changeSteps!: (amount: number) => void;
  @Input() steps: number = 0;

  glasses = Array(8).fill(0);
}
