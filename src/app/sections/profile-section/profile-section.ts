import { Component } from '@angular/core';
import { TittleSection } from "../../components/tittle-header/tittle-section";
import { MiniCard } from "../../components/cards/miniCards/miniCard";

@Component({
  selector: 'profile-section',
  imports: [TittleSection, MiniCard],
  templateUrl: './profile-section.html',
})
export class ProfileSection{ }
