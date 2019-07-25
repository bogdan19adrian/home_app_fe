import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing.component';
import {WeatherComponent} from './weather/weather.component';
import {HomeAppComponent} from '../home-app/home-app.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'weather'
      },
      {path: 'weather', component: WeatherComponent},
      {path: 'home-app', component: HomeAppComponent, canActivate: [AuthGuard]},
      {path: 'test', component: TestComponentComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}
