import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'header-page',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPage { }
