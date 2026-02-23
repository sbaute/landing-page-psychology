import { Component } from '@angular/core';

@Component({
  selector: 'button-wsp',
  imports: [],
  templateUrl: './button-wsp.html',
})
export class ButtonWsp {


  phone = '3415614807';
  message = 'Hola, estoy interesado/a en comenzar terapia. Me gustaría recibir información sobre las sesiones. Muchas gracias.';

  get whatsappLink(): string {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
