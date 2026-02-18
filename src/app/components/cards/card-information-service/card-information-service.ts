import { Component, input } from '@angular/core';
import { CheckItem } from "../check-item/check-item";

@Component({
  selector: 'card-information-service',
  imports: [CheckItem],
  templateUrl: './card-information-service.html',
})
export class CardInformationService {

  title = input<string>();
  image = input<string>();
  items = input<string[]>();

 }
