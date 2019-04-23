import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxTransferComponent } from './fx-transfer.component';

describe('FxTransferComponent', () => {
  let component: FxTransferComponent;
  let fixture: ComponentFixture<FxTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
