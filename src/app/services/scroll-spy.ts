import { Injectable, signal, inject } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpy {

  activeSection = signal<string>('inicio');

  private sections = ['inicio', 'sobre-mi', 'servicios', 'contacto'];
  private location = inject(Location);
  private observer?: IntersectionObserver;

  /**
   * Must be called after the DOM sections are present (e.g. in LayoutPage.afterViewInit).
   */
  start(): void {
    if (this.observer) {
      return; // already started
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            this.activeSection.set(id);
            // update url fragment without triggering router scroll
            const base = this.location.path(false).split('#')[0];
            this.location.replaceState(`${base}#${id}`);
          }
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0
      }
    );

    this.sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && this.observer) {
        this.observer.observe(el);
      }
    });
  }

  /**
   * Programmatic scroll to a section, updating state/URL.
   */
  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    el.scrollIntoView({ behavior: 'smooth' });
    this.activeSection.set(id);
    const base = this.location.path(false).split('#')[0];
    this.location.go(`${base}#${id}`);
  }
}
