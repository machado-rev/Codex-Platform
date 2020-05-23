import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerRegistrationComponent } from './freelancer-registration.component';

describe('FreelancerRegistrationComponent', () => {
  let component: FreelancerRegistrationComponent;
  let fixture: ComponentFixture<FreelancerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
