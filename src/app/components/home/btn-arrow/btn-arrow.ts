import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-btn-down',
  imports: [],
  templateUrl: './btn-arrow.html',
  styleUrl: './btn-arrow.scss',
})
export class BtnDown {
  @Input() isOpen!: boolean;
  @Output() open = new EventEmitter<void>();

  handleClick() {
    this.open.emit();
  }
}
