import { Component } from '@angular/core';
import { CardInformationService } from "../../components/cards/card-information-service/card-information-service";

@Component({
  selector: 'servicios-section',
  imports: [CardInformationService],
  templateUrl: './servicios-section.html',
})
export class ServiciosSection { }
