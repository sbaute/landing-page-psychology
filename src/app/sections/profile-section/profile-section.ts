import { Component } from '@angular/core';
import { TittleSection } from "../../components/tittle-header/tittle-section";
import { MiniCard } from "../../components/cards/miniCards/miniCard";

@Component({
  selector: 'profile-section',
  imports: [TittleSection, MiniCard],
  templateUrl: './profile-section.html',
})
export class ProfileSection{

   cards = [
    { type: 'enfoque', title: 'Mi Enfoque', description: 'Modelo integrativo de psicoterapia' },
    { type: 'espacio', title: 'Espacio Terapéutico', description: 'Confianza, empatía y respeto.' },
    { type: 'proceso', title: 'Cada Proceso es Único', description: 'Acompañamiento a tu propio ritmo.' },
  ] as const;
}


