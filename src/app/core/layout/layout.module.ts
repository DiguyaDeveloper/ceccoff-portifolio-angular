import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}