import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeAppComponent} from '../home-app.component';
import {HomeAppRoutingModule} from '../homeapp-routing.module';



@NgModule({
  declarations: [HomeAppComponent],
  imports: [
    CommonModule,
    HomeAppRoutingModule
  ],

})
export class HomeAppModule { }
