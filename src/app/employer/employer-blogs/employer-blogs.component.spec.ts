import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerBlogsComponent } from './employer-blogs.component';

describe('EmployerBlogsComponent', () => {
  let component: EmployerBlogsComponent;
  let fixture: ComponentFixture<EmployerBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
