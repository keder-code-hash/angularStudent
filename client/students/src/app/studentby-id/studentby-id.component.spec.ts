import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbyIdComponent } from './studentby-id.component';

describe('StudentbyIdComponent', () => {
  let component: StudentbyIdComponent;
  let fixture: ComponentFixture<StudentbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
