import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { ProfileService } from '../service/profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<Profile> {
  constructor(private _profileService: ProfileService) {}

  resolve(): Observable<Profile> {
    return this._profileService.get();
  }
}
