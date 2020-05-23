import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerViewBlogComponent } from './employer-view-blog.component';

describe('EmployerViewBlogComponent', () => {
  let component: EmployerViewBlogComponent;
  let fixture: ComponentFixture<EmployerViewBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerViewBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerViewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
