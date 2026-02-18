import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { Location } from '@angular/common';

import { HomeSection } from '../sections/home-section/home-section';
import { ProfileSection } from '../sections/profile-section/profile-section';
import { ServiciosSection } from '../sections/servicios-section/servicios-section';
import { ContactSection } from '../sections/contact-section/contact-section';

@Component({
  selector: 'layout-page',
  standalone: true,
  imports: [HomeSection, ProfileSection, ServiciosSection, ContactSection],
  templateUrl: './layout-page.html',
})
export class LayoutPage implements AfterViewInit, OnDestroy {
  activeSection = signal('inicio');

  private observer?: IntersectionObserver;
  private readonly sectionIds = ['inicio', 'servicios', 'sobre-mi', 'contacto'];

  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    // Si entrás con /#servicios, /#contacto, etc.
    const hash = window.location.hash.replace('#', '');

    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50);
    }

    this.setupScrollSpy();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupScrollSpy(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!mostVisible?.target?.id) return;

        const id = mostVisible.target.id;

        if (this.activeSection() !== id) {
          this.activeSection.set(id);

          // Actualiza URL sin recargar (manteniendo la ruta actual)
          const base = window.location.pathname;
          this.location.replaceState(`${base}#${id}`);
        }
      },
      {
        threshold: 0.30, // 55% visible = activa
      }
    );

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    this.activeSection.set(id);

    const base = window.location.pathname;
    this.location.replaceState(`${base}#${id}`);
  }
}
