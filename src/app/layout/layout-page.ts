import { AfterViewInit, Component } from '@angular/core';
import { HomeSection } from '../sections/home-section/home-section';
import { ProfileSection } from '../sections/profile-section/profile-section';
import { ServiciosSection } from '../sections/servicios-section/servicios-section';
import { ContactSection } from '../sections/contact-section/contact-section';
import { ScrollSpy } from '../services/scroll-spy';

@Component({
  selector: 'layout-page',
  standalone: true,
  imports: [HomeSection, ProfileSection, ServiciosSection, ContactSection],
  templateUrl: './layout-page.html',
})
export class LayoutPage implements AfterViewInit {
  // expose the shared signal from the service for debug or other uses
  get activeSection() {
    return this.scrollSpy.activeSection;
  }

  constructor(private scrollSpy: ScrollSpy) {}

  ngAfterViewInit(): void {
    // start observing once DOM is ready
    this.scrollSpy.start();

    // if URL already has a hash, jump there
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // give a tick so the elements are observed first
      setTimeout(() => this.scrollSpy.scrollTo(hash), 50);
    }
  }
}
