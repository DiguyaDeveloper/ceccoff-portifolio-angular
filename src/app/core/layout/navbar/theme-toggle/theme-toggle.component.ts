import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from 'src/app/core/service/theme/theme.service';

@Component({
  standalone: true,
  selector: 'ceccoff-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  imports: [MatIconModule],
})
export class ThemeToggleComponent {
  public mode: 'dark' | 'light' = 'light';

  get icon(): string {
    return this.mode === 'dark'
      ? 'heroicons_solid:moon'
      : 'heroicons_solid:sun';
  }

  get id(): string {
    return `theme-toggle-${this.mode}-icon`;
  }

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(value => {
      this.mode = value;
    });
  }

  public toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}
