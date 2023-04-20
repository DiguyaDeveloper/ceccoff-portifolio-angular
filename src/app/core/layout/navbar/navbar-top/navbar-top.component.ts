import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { SocialMidiaService } from 'src/app/core/service/social/social.service';
import { NavbarSocialMidiaComponent } from './navbar-social-midia/navbar-social-midia.component';

@Component({
  standalone: true,
  selector: 'ceccoff-navbar-top',
  templateUrl: './navbar-top.component.html',
  imports: [MatIconModule, NavbarSocialMidiaComponent],
})
export class NavbarTopComponent {
  private _unsubscribeAll: Subject<null> = new Subject<null>();

  profile: Profile | undefined;

  constructor(
    readonly _socialMidiaService: SocialMidiaService,
    readonly _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this._profileService.profile$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (profile: Profile | undefined): void => {
          this.profile = profile;
        },
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
