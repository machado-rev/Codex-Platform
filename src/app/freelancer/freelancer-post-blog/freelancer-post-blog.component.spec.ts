import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerPostBlogComponent } from './freelancer-post-blog.component';

describe('FreelancerPostBlogComponent', () => {
  let component: FreelancerPostBlogComponent;
  let fixture: ComponentFixture<FreelancerPostBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerPostBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
