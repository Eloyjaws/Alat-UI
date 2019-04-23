import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.scss']
})
export class FundsTransferComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
