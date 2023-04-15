import { Injectable } from '@angular/core';
import { SocialMidia } from '../../types/social.types';

@Injectable({
  providedIn: 'root',
})
export class SocialMidiaService {
  public redirectToSocialMidia(socialMidia: SocialMidia) {
    const socialMidiaUrl: { [key in SocialMidia]: string } = {
      facebook: 'https://www.facebook.com/diego.c.souza.3',
      linkedin: 'https://www.linkedin.com/in/diego-ceccon/',
      instagram: 'https://www.instagram.com/idiguya/',
      github: 'https://github.com/DiguyaDeveloper',
      twitch: 'https://www.twitch.tv/idiguya',
    };
    window.open(socialMidiaUrl[socialMidia], '_blank');
  }
}
