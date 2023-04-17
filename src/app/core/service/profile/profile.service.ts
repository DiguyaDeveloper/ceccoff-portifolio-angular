import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Profile } from '../../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _profile: BehaviorSubject<Profile> = new BehaviorSubject(
    {} as Profile
  );

  constructor(private _httpClient: HttpClient) {}

  get profile$(): Observable<Profile | undefined> {
    return this._profile.asObservable();
  }

  get(): Observable<Profile> {
    return this._httpClient.get<Profile>('api/profile').pipe(
      tap((profile: Profile): void => {
        this._profile.next(profile);
      })
    );
  }
}
