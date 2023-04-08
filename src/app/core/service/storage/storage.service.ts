import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

const THEME_MODE = 'theme-mode';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {}

  public setThemeMode(mode: 'dark' | 'light'): void {
    this.storage.setItem(THEME_MODE, mode);
  }

  public getThemeMode(): 'dark' | 'light' {
    return this.storage.getItem(THEME_MODE) as 'dark' | 'light';
  }
}
