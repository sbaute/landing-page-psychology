import { Component, input } from '@angular/core';


@Component({
  selector: 'check-item',
  standalone: true,
  imports: [],
  templateUrl: './check-item.html',
})
export class CheckItem {
  text = input<string>();
}
