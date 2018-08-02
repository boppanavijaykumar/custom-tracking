import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBillingInfoComponent } from './tournament-billing-info.component';

describe('TournamentBillingInfoComponent', () => {
  let component: TournamentBillingInfoComponent;
  let fixture: ComponentFixture<TournamentBillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentBillingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentBillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
