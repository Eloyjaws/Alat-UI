import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLimitComponent } from './transaction-limit.component';

describe('TransactionLimitComponent', () => {
  let component: TransactionLimitComponent;
  let fixture: ComponentFixture<TransactionLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
