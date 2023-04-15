import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialMidiaService } from 'src/app/core/service/social/social.service';
import { SocialMidia } from 'src/app/core/types/social.types';

@Component({
  standalone: true,
  selector: 'ceccoff-navbar-top',
  templateUrl: './navbar-top.component.html',
  imports: [MatIconModule],
})
export class NavbarTopComponent {
  constructor(readonly socialMidiaService: SocialMidiaService) {}

  onClickLink(socialMidia: SocialMidia) {
    this.socialMidiaService.redirectToSocialMidia(socialMidia);
  }
}
