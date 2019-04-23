import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  @ViewChild('drawer') sidenav: MatSidenav;
  domSidebar;
  mainContent;

  constructor() { }

  ngOnInit() {
    this.sidenav.open();
    fromEvent(window, 'resize').pipe(debounceTime(600)).subscribe(event => this.calculateOrientation())
    this.domSidebar = document.querySelector('.sidenav-content');
    setTimeout(() => {
      this.mainContent = document.querySelector('.mat-drawer-content')
    }, 0);
  }

  calculateOrientation() {
    // buggy logic
    // if(window.innerWidth >= 800 ) {
    //   this.domSidebar.classList.remove('sidenav-content-sm');
    //   this.mainContent.classList.remove('mat-drawer-content-full');
    // } else if(window.innerWidth < 800) {
    //   this.domSidebar.classList.contains('sidenav-content-sm') ? null : this.domSidebar.classList.add('sidenav-content-sm');
    //   this.mainContent.classList.contains('mat-drawer-content-full') ? null : this.mainContent.classList.add('mat-drawer-content-full');
    // }
  }

  toggleSidebarSize() {
      this.domSidebar.classList.toggle('sidenav-content-sm');
      this.mainContent.classList.toggle('mat-drawer-content-full');
  }


}
