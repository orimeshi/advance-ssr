import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlineComponent } from './online/online.component';
import { SeaComponent } from './sea/sea.component';
import { CargoComponent } from './cargo/cargo.component';
import { BeautyComponent } from './beauty/beauty.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { TravelComponent } from './travel/travel.component';
import { PropertyComponent } from './property/property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnlineComponent,
    SeaComponent,
    CargoComponent,
    BeautyComponent,
    HealthComponent,
    BusinessComponent,
    TravelComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
