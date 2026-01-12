import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'header-page',
  imports: [RouterLink],
  templateUrl: './header-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPage { }
