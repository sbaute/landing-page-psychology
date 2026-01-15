import { Component } from '@angular/core';
import { CardInformationService } from "../../components/cards/card-information-service/card-information-service";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'servicios-section',
  imports: [CardInformationService, RouterLink],
  templateUrl: './servicios-section.html',
})
export class ServiciosSection { }
