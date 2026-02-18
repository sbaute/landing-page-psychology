import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ScrollSpy } from '../../services/scroll-spy';

@Component({
  selector: 'header-page',
  imports: [],
  templateUrl: './header-page.html',
})
export class HeaderPage implements OnInit, OnDestroy {

  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  goToMobile(id: string) {
    this.goTo(id);
    this.closeMenu();
  }

  private scrollSpy = inject(ScrollSpy);
  activeSection = this.scrollSpy.activeSection;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private routerSub?: Subscription;

  private handleHashChange = () => {
    const frag = window.location.hash.replace('#', '');
    if (frag) {
      this.activeSection.set(frag);
      this.onScrollTo(frag);
    }
  };



  // scroll spy keeps track of the current section in view

  onScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  ngOnInit() {
    // respond to history/popstate and hashchange for back/forward or manual URL edits
    window.addEventListener('popstate', this.handleHashChange);
    window.addEventListener('hashchange', this.handleHashChange);

    // there is still value in router NavigationEnd (if full route loads occur)
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const frag = this.route.snapshot.fragment;
        if (frag) {
          this.activeSection.set(frag);
          this.onScrollTo(frag);
        }
      });

    // initial fragment
    const initial = this.route.snapshot.fragment || window.location.hash.replace('#', '');
    if (initial) {
      this.activeSection.set(initial);
      this.onScrollTo(initial);
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    window.removeEventListener('popstate', this.handleHashChange);
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  goTo(id: string) {
    // update the active section signal for styling
    this.activeSection.set(id);

    // push new hash state so history/back works without triggering router scroll
    const base = this.router.url.split('#')[0];
    this.location.go(`${base}#${id}`);

    // scroll smoothly to the target element if it exists
    this.onScrollTo(id);

    // close the mobile menu if it was open
    this.closeMenu();
  }


}
