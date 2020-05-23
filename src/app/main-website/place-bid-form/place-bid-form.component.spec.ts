import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBidFormComponent } from './place-bid-form.component';

describe('PlaceBidFormComponent', () => {
  let component: PlaceBidFormComponent;
  let fixture: ComponentFixture<PlaceBidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceBidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceBidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
