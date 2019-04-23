import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillsPaymentComponent } from './new-bills-payment.component';

describe('NewBillsPaymentComponent', () => {
  let component: NewBillsPaymentComponent;
  let fixture: ComponentFixture<NewBillsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBillsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBillsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
