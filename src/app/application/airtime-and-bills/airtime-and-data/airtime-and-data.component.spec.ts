import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimeAndDataComponent } from './airtime-and-data.component';

describe('AirtimeAndDataComponent', () => {
  let component: AirtimeAndDataComponent;
  let fixture: ComponentFixture<AirtimeAndDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtimeAndDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimeAndDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
