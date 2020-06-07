import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierpaymentrecordComponent } from './cashierpaymentrecord.component';

describe('CashierpaymentrecordComponent', () => {
  let component: CashierpaymentrecordComponent;
  let fixture: ComponentFixture<CashierpaymentrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierpaymentrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierpaymentrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
