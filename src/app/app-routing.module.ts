import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileResolver } from './core/resolvers/profile.resolvers';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  {
    path: '',
    resolve: {
      profile: ProfileResolver,
    },
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
  providers: [ProfileResolver],
})
export class AppRoutingModule {}
