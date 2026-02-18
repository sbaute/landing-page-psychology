import { Component, signal } from '@angular/core';
import { CardInformationService } from "../../components/cards/card-information-service/card-information-service";
import { TittleSection } from "../../components/tittle-header/tittle-section";

type CardService = {
  title: string;
  image: string;
  items: string[];
};


@Component({
  selector: 'servicios-section',
  imports: [CardInformationService, TittleSection],
  templateUrl: './servicios-section.html',
})
export class ServiciosSection {

  readonly services = signal<CardService[]>([
    {
      title: 'Terapia Presencial',
      image: 'images/presencial.png',
      items: [
        'Ambiente seguro y confidencial',
        'Comunicación cercana y empática',
        'Espacio confortable en consultorio'
      ]
    },
    {
      title: 'Terapia Online',
      image: 'images/online.png',
      items: [
        'Desde la comodidad de tu hogar',
        'Flexibilidad horaria',
        'Sin desplazamientos'
      ]
    }
  ]);
}
