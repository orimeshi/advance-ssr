import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BusinessComponent } from './business/business.component';
import { CargoComponent } from './cargo/cargo.component';
import { HealthComponent } from './health/health.component';
import { OnlineComponent } from './online/online.component';
import { SeaComponent } from './sea/sea.component';
import { TravelComponent } from './travel/travel.component';
import { PropertyComponent } from './property/property.component';
import { ThanksComponent  } from './thanks/thanks.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'beauty', component: BeautyComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'cargo', component: CargoComponent},
  {path: 'health', component: HealthComponent},
  {path: 'online', component: OnlineComponent},
  {path: 'sea', component: SeaComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'property', component: PropertyComponent},
  {path: 'thankyoupage', component: ThanksComponent},
  {path: 'thanks', redirectTo: 'thankyoupage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
