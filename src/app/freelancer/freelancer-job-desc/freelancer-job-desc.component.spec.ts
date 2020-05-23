import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerJobDescComponent } from './freelancer-job-desc.component';

describe('FreelancerJobDescComponent', () => {
  let component: FreelancerJobDescComponent;
  let fixture: ComponentFixture<FreelancerJobDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerJobDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerJobDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
