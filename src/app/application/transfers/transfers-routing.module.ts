import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { TransferToContactComponent } from './transfer-to-contact/transfer-to-contact.component';
import { AtmCardlessWithdrawalComponent } from './atm-cardless-withdrawal/atm-cardless-withdrawal.component';
import { FxTransferComponent } from './fx-transfer/fx-transfer.component';

const routes: Routes = [
  {path: 'transfer-to-account', component: FundsTransferComponent},
  {path: 'transfer-to-contact', component: TransferToContactComponent},
  {path: 'cardless-transfer', component: AtmCardlessWithdrawalComponent},
  {path: 'fx-transfer', component: FxTransferComponent},
  {path: '', redirectTo: 'transfer-to-account'},
  {path: '**', redirectTo: 'transfer-to-account', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
