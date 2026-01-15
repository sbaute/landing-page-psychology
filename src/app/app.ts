import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPage } from "./components/header/header-page";
import { FooterPage } from "./components/footer/footer-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPage, FooterPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('page-psychology-mati');
}
