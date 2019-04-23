import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fx-transfer',
  templateUrl: './fx-transfer.component.html',
  styleUrls: ['./fx-transfer.component.scss']
})
export class FxTransferComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
