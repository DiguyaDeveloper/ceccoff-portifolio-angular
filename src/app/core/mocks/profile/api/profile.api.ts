import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { MockApiService } from 'src/app/core/lib/mock-api';
import { profileData } from '../data/profile.data';

@Injectable({
  providedIn: 'root',
})
export class ProfileMockApi {
  private _profile: Profile = profileData;

  /**
   * Constructor
   */
  constructor(private _mockApiService: MockApiService) {
    // Register Mock API handlers
    this.registerHandlers();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register Mock API handlers
   */
  registerHandlers(): void {
    // -----------------------------------------------------------------------------------------------------
    // @ Categories - GET
    // -----------------------------------------------------------------------------------------------------
    this._mockApiService
      .onGet('api/profile')
      .reply(() => [200, cloneDeep(this._profile)]);
  }
}
