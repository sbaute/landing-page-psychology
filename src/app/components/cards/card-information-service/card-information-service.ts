import { Component, input } from '@angular/core';

@Component({
  selector: 'card-information-service',
  imports: [],
  templateUrl: './card-information-service.html',
})
export class CardInformationService {

   title = input.required<string>();
  description = input.required<string>();
  features = input.required<string[]>();
  icon = input.required<'presencial' | 'online'>();

 }
