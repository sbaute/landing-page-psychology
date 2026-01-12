import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPage } from "./components/header/header-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderPage ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('page-psychology-mati');
}
