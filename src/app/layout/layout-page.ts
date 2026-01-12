import { AfterViewInit, Component } from '@angular/core';
import { HeaderPage } from "../components/header/header-page";
import { HomeSection } from "../sections/home-section/home-section";
import { ProfileSection } from "../sections/profile-section/profile-section";
import { ActivatedRoute } from '@angular/router';
import { ServiciosSection } from "../sections/servicios-section/servicios-section";
import { MyApproachSection } from '../sections/my-approach-section/my-approach-section';

@Component({
  selector: 'layout-page',
  imports: [HeaderPage, HomeSection, ProfileSection, ServiciosSection, MyApproachSection],
  templateUrl: './layout-page.html',
})
export class LayoutPage implements AfterViewInit {

  // Inyectamos ActivatedRoute para escuchar cambios en el fragment de la URL
  constructor(private route: ActivatedRoute) {}

  // Hook del ciclo de vida:
  // Se ejecuta UNA VEZ cuando Angular ya terminó de renderizar
  // este componente y todos sus componentes hijos
  ngAfterViewInit(): void {

    // Nos suscribimos al fragment de la URL (lo que viene después del #)
    // Ejemplo: /#sobre-mi → fragment = 'sobre-mi'
    this.route.fragment.subscribe((fragment: string | null) => {

      // Si no hay fragment (ej: solo /), no hacemos nada
      if (!fragment) return;

      // Esperamos un ciclo más del navegador para asegurarnos
      // de que TODO el DOM esté completamente renderizado
      setTimeout(() => {

        // Buscamos en el DOM el elemento cuyo id coincide con el fragment
        // Ejemplo: <section id="sobre-mi">
        const element = document.getElementById(fragment);

        // Si el elemento existe, hacemos scroll hasta él
        // behavior: 'smooth' → scroll animado
        // block: 'start'   → alinea la sección al inicio de la pantalla
        element?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      });
    });
  }
}
