import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { EStatementComponent } from './e-statement/e-statement.component';
import { TransactionLimitComponent } from './transaction-limit/transaction-limit.component';

const routes: Routes = [
  {path: 'history', component: TransactionHistoryComponent},
  {path: 'details', component: AccountDetailsComponent},
  {path: 'estatement', component: EStatementComponent},
  {path: 'limit', component: TransactionLimitComponent},
  {path: '', redirectTo: 'history', pathMatch: 'full'},
  {path: '**', redirectTo: 'history', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
