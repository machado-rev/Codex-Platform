import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreelancerProfileComponent } from './edit-freelancer-profile.component';

describe('EditFreelancerProfileComponent', () => {
  let component: EditFreelancerProfileComponent;
  let fixture: ComponentFixture<EditFreelancerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFreelancerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFreelancerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
