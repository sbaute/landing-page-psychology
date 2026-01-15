import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";
import { NavbarPage } from "../navbar-page/navbar-page";

@Component({
  selector: 'header-page',
  imports: [NavbarPage],
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

}
