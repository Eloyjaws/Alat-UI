import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirtimeAndBillsRoutingModule } from './airtime-and-bills-routing.module';
import { AirtimeAndDataComponent } from './airtime-and-data/airtime-and-data.component';
import { NewBillsPaymentComponent } from './new-bills-payment/new-bills-payment.component';
import { RecurringPaymentsComponent } from './recurring-payments/recurring-payments.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AirtimeAndDataComponent, NewBillsPaymentComponent, RecurringPaymentsComponent],
  imports: [
    CommonModule,
    AirtimeAndBillsRoutingModule,
    SharedModule
  ]
})
export class AirtimeAndBillsModule { }
