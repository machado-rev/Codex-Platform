import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerBlogsComponent } from './freelancer-blogs.component';

describe('FreelancerBlogsComponent', () => {
  let component: FreelancerBlogsComponent;
  let fixture: ComponentFixture<FreelancerBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
