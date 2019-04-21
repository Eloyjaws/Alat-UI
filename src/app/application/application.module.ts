import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { MatMenuModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatIconModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransfersComponent } from './transfers/transfers.component';
import { AirtimeAndBillsComponent } from './airtime-and-bills/airtime-and-bills.component';
import { WesternUnionComponent } from './western-union/western-union.component';
import { GoalsComponent } from './goals/goals.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileComponent } from './profile/profile.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CardsComponent } from './cards/cards.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [ApplicationComponent, HomeComponent, AccountsComponent, TransfersComponent, AirtimeAndBillsComponent, WesternUnionComponent, GoalsComponent, LoansComponent, ProfileComponent, LifestyleComponent, CardsComponent, SettingsComponent, SupportComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
  ]
})
export class ApplicationModule {}
