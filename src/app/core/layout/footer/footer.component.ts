import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialMidiaService } from '../../service/social/social.service';
import { SocialMidia } from '../../types/social.types';

@Component({
  standalone: true,
  selector: 'ceccoff-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [MatIconModule],
})
export class FooterComponent {
  constructor(readonly _socialMidiaService: SocialMidiaService) {}

  onClickLink(socialMidia: SocialMidia) {
    this._socialMidiaService.redirectToSocialMidia(socialMidia);
  }
}
