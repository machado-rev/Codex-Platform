import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPostBlogComponent } from './employer-post-blog.component';

describe('EmployerPostBlogComponent', () => {
  let component: EmployerPostBlogComponent;
  let fixture: ComponentFixture<EmployerPostBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerPostBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerPostBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
