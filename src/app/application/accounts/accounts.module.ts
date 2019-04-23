import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { EStatementComponent } from './e-statement/e-statement.component';
import { TransactionLimitComponent } from './transaction-limit/transaction-limit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TransactionHistoryComponent, AccountDetailsComponent, EStatementComponent, TransactionLimitComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
