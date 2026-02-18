import { Component, AfterViewInit, OnDestroy, signal, input } from '@angular/core';

@Component({
  selector: 'header-page',
  imports: [],
  templateUrl: './header-page.html',
})
export class HeaderPage {

 isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  activeSection = input<string>('inicio');
  onScrollTo = input<(id: string) => void>(() => {});

  goTo(id: string) {
    this.onScrollTo()(id);
  }


}
