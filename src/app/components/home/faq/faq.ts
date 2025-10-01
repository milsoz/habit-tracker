import { Component, signal } from '@angular/core';
import { BtnArrow } from '../btn-arrow/btn-arrow';

@Component({
  selector: 'app-faq',
  imports: [BtnArrow],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  openIndex = signal(-1);

  changeOpen = (i: number) => {
    if (this.openIndex() === i) {
      this.openIndex.set(-1);
    } else {
      this.openIndex.set(i);
    }
  };
}
