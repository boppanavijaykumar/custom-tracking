import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTeamSignupComponent } from './tournament-team-signup.component';

describe('TournamentTeamSignupComponent', () => {
  let component: TournamentTeamSignupComponent;
  let fixture: ComponentFixture<TournamentTeamSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTeamSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTeamSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
