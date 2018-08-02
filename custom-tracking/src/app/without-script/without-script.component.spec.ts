import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutScriptComponent } from './without-script.component';

describe('WithoutScriptComponent', () => {
  let component: WithoutScriptComponent;
  let fixture: ComponentFixture<WithoutScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
