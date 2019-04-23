import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBillsPaymentComponent } from './new-bills-payment/new-bills-payment.component';
import { RecurringPaymentsComponent } from './recurring-payments/recurring-payments.component';
import { AirtimeAndDataComponent } from './airtime-and-data/airtime-and-data.component';

const routes: Routes = [
  {path: 'index', component: AirtimeAndDataComponent},
  {path: 'bills', component: NewBillsPaymentComponent},
  {path: 'schedule', component: RecurringPaymentsComponent},
  {path: '', redirectTo: 'index'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirtimeAndBillsRoutingModule { }
