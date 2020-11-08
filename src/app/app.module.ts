import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { SeaformComponent } from './seaform/seaform.component';
import { HealthformComponent } from './healthform/healthform.component';
import { BusinessformComponent } from './businessform/businessform.component';
import { CargoformComponent } from './cargoform/cargoform.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { FooterComponent } from './footer/footer.component';
import { BeautyformComponent } from './beautyform/beautyform.component';

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
    PropertyComponent,
    SeaformComponent,
    HealthformComponent,
    BusinessformComponent,
    CargoformComponent,
    PropertyformComponent,
    FooterComponent,
    BeautyformComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [Title,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
