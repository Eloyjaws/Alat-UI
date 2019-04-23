import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airtime-and-data',
  templateUrl: './airtime-and-data.component.html',
  styleUrls: ['./airtime-and-data.component.scss']
})
export class AirtimeAndDataComponent implements OnInit {

  stage2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleStages() {
    this.stage2 = !this.stage2;
  }

}
