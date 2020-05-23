import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerViewBlogComponent } from './freelancer-view-blog.component';

describe('FreelancerViewBlogComponent', () => {
  let component: FreelancerViewBlogComponent;
  let fixture: ComponentFixture<FreelancerViewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerViewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerViewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
