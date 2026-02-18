import { Component, input } from '@angular/core';

@Component({
  selector: 'mini-card',
  imports: [],
  templateUrl: './miniCard.html',
})
export class MiniCard {

   icon = input<string>();
   title = input<string>();
   description = input<string>();


 }
