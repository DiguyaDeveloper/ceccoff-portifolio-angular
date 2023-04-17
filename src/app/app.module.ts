import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './core/layout/layout.module';
import { MockApiModule } from './core/lib/mock-api';
import { mockApiServices } from './core/mocks';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
    MockApiModule.forRoot(mockApiServices),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
