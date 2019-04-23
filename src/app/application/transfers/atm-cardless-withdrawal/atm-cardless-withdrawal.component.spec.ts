import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmCardlessWithdrawalComponent } from './atm-cardless-withdrawal.component';

describe('AtmCardlessWithdrawalComponent', () => {
  let component: AtmCardlessWithdrawalComponent;
  let fixture: ComponentFixture<AtmCardlessWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmCardlessWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmCardlessWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
