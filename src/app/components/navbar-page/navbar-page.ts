import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollSpy } from '../../services/scroll-spy';

@Component({
  selector: 'navbar-page',
  imports: [RouterLink],
  templateUrl: './navbar-page.html',
})
export class NavbarPage {

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

   private scrollSpy = inject(ScrollSpy);
  activeSection = this.scrollSpy.activeSection;



}
