import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-to-contact',
  templateUrl: './transfer-to-contact.component.html',
  styleUrls: ['./transfer-to-contact.component.scss']
})
export class TransferToContactComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
