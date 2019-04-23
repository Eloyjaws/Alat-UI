import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm-cardless-withdrawal',
  templateUrl: './atm-cardless-withdrawal.component.html',
  styleUrls: ['./atm-cardless-withdrawal.component.scss']
})
export class AtmCardlessWithdrawalComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
