import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { TransferToContactComponent } from './transfer-to-contact/transfer-to-contact.component';
import { AtmCardlessWithdrawalComponent } from './atm-cardless-withdrawal/atm-cardless-withdrawal.component';
import { FxTransferComponent } from './fx-transfer/fx-transfer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FundsTransferComponent, TransferToContactComponent, AtmCardlessWithdrawalComponent, FxTransferComponent],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    SharedModule
  ]
})
export class TransfersModule { }
