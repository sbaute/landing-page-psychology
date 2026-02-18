import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'tittle-section',
  imports: [],
  templateUrl: './tittle-section.html',
})
export class TittleSection {
   text = input.required<string>();
}
