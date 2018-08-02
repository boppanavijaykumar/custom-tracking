import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBillingInfoComponent } from './event-billing-info.component';

describe('EventBillingInfoComponent', () => {
  let component: EventBillingInfoComponent;
  let fixture: ComponentFixture<EventBillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBillingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
