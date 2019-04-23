import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bills-payment',
  templateUrl: './new-bills-payment.component.html',
  styleUrls: ['./new-bills-payment.component.scss']
})
export class NewBillsPaymentComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
