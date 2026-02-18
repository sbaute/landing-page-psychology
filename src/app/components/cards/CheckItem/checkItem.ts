import { Component, input } from '@angular/core';

@Component({
  selector: 'check-item',
  imports: [],
  templateUrl: './CheckItem.html',
})
export class CheckItem {

  text = input<string>();
}
