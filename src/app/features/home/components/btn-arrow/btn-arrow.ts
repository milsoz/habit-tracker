import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-btn-arrow',
  imports: [],
  templateUrl: './btn-arrow.html',
  styleUrl: './btn-arrow.scss',
})
export class BtnArrow {
  @Input() isOpen!: boolean;
  @Output() open = new EventEmitter<void>();

  handleClick() {
    this.open.emit();
  }
}
