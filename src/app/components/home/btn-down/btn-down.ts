import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-btn-down',
  imports: [],
  templateUrl: './btn-down.html',
  styleUrl: './btn-down.scss',
})
export class BtnDown {
  @Input() isOpen!: boolean;
  @Output() open = new EventEmitter<void>();

  handleClick() {
    this.open.emit();
  }
}
