import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  standalone: true,
  selector: 'ceccoff-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [ThemeToggleComponent, NavbarTopComponent, CommonModule],
})
export class NavbarComponent {
  showHeader = false;
}
