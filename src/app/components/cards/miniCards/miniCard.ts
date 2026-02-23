import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './miniCard.html',
})
export class MiniCard {
  type = input<'enfoque' | 'espacio' | 'proceso'>();
  title = input<string>();
  description = input<string>();

  // Array de SVGs
  svgs = [
    {
      name: 'enfoque',
      viewBox: '0 0 24 26',
      path: 'M13 3c3.88 0 7 3.12 7 7s-3.12 7-7 7-7-3.12-7-7 3.12-7 7-7zm0-2C6.48 1 1 6.48 1 13s5.48 12 12 12 12-5.48 12-12S19.52 1 13 1z',
    },
   {
      name: 'espacio',
      viewBox: '0 0 24 24',
      path: 'M13.5 4.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-2.75-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m2.763 7.038A3.25 3.25 0 0 0 2 11.25v4.25a.5.5 0 0 0 .5.5H7v2a.5.5 0 0 0 .5.5H12v4a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a5 5 0 0 0-8.25-3.8a3.5 3.5 0 0 0-5.737-1.162',
    },
    {
      name: 'proceso',
      viewBox: '0 0 24 24',
      path: 'M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4V2z',
    },
  ] as const;
}
