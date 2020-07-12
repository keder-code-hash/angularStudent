import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerequestComponent } from './issuerequest.component';

describe('IssuerequestComponent', () => {
  let component: IssuerequestComponent;
  let fixture: ComponentFixture<IssuerequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
