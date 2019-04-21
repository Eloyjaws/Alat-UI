import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransfersComponent } from './transfers/transfers.component';
import { AirtimeAndBillsComponent } from './airtime-and-bills/airtime-and-bills.component';
import { WesternUnionComponent } from './western-union/western-union.component';
import { GoalsComponent } from './goals/goals.component';
import { ProfileComponent } from './profile/profile.component';
import { LoansComponent } from './loans/loans.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CardsComponent } from './cards/cards.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'accounts', component: AccountsComponent},
      {path: 'transfers', component: TransfersComponent},
      {path: 'airtime-bills', component: AirtimeAndBillsComponent},
      {path: 'western-union', component: WesternUnionComponent},
      {path: 'goals', component: GoalsComponent},
      {path: 'loans', component: LoansComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'lifestyle', component: LifestyleComponent},
      {path: 'cards', component: CardsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'support', component: SupportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
