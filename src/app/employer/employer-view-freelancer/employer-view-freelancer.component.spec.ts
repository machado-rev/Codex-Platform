import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerViewFreelancerComponent } from './employer-view-freelancer.component';

describe('EmployerViewFreelancerComponent', () => {
  let component: EmployerViewFreelancerComponent;
  let fixture: ComponentFixture<EmployerViewFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerViewFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerViewFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
