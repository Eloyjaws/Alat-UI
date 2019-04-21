import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeAndBillsComponent } from './airtime-and-bills.component';

describe('AirtimeAndBillsComponent', () => {
  let component: AirtimeAndBillsComponent;
  let fixture: ComponentFixture<AirtimeAndBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimeAndBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimeAndBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
