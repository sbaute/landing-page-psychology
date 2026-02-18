import { Component, signal, inject } from '@angular/core';
import { ScrollSpy } from '../../services/scroll-spy';

@Component({
  selector: 'header-page',
  imports: [],
  templateUrl: './header-page.html',
})
export class HeaderPage {

 isMenuOpen = signal(false);

  private scrollSpy = inject(ScrollSpy);
  activeSection = this.scrollSpy.activeSection;
  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  // scroll spy keeps track of the current section in view

  onScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  goTo(id: string) {
    // update the active section signal for styling
    this.activeSection.set(id);

    // scroll smoothly to the target element if it exists
    this.onScrollTo(id);

    // close the mobile menu if it was open
    this.closeMenu();
  }


}
