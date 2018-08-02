import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithScriptComponent } from './with-script.component';

describe('WithScriptComponent', () => {
  let component: WithScriptComponent;
  let fixture: ComponentFixture<WithScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
