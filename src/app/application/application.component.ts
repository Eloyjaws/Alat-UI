import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @ViewChild('drawer') sidenav: MatSidenav;
  domSidebar;

  constructor() { }

  ngOnInit() {
    this.sidenav.open();
    this.domSidebar = document.querySelector('.sidenav-content');
  }

  toggleSidebarSize() {
      this.domSidebar.classList.toggle('sidenav-content-sm');
  }


}
