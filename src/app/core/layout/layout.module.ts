import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarSocialMidiaComponent } from './navbar/navbar-top/navbar-social-midia/navbar-social-midia.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    NavbarSocialMidiaComponent,
    FooterComponent,
  ],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}
