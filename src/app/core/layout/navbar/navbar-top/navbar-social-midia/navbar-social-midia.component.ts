import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialMidiaService } from 'src/app/core/service/social/social.service';
import { SocialMidia } from 'src/app/core/types/social.types';

@Component({
  standalone: true,
  selector: 'ceccoff-navbar-social-midia',
  templateUrl: './navbar-social-midia.component.html',
  imports: [MatIconModule],
})
export class NavbarSocialMidiaComponent {
  constructor(readonly _socialMidiaService: SocialMidiaService) {}

  onClickLink(socialMidia: SocialMidia) {
    this._socialMidiaService.redirectToSocialMidia(socialMidia);
  }
}
