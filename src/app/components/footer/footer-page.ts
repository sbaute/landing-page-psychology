import { Component } from '@angular/core';

@Component({
  selector: 'footer-page',
  imports: [],
  templateUrl: './footer-page.html',
})
export class FooterPage {
  currentYear = new Date().getFullYear();

 }
