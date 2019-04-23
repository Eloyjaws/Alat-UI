import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToContactComponent } from './transfer-to-contact.component';

describe('TransferToContactComponent', () => {
  let component: TransferToContactComponent;
  let fixture: ComponentFixture<TransferToContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferToContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
