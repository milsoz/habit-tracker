import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WaterSvg } from '../water-svg/water-svg';

@Component({
  selector: 'app-body',
  imports: [WaterSvg],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  @Input() changeGlassesFull!: (i: number) => void;
  @Input() glassesFull: number = 0;
  @Output() fullChanged = new EventEmitter<void>();
  glasses = Array(8).fill(0);

  handleClick(i: number) {
    this.fullChanged.emit();
  }
}
