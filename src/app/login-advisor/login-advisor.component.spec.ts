import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdvisorComponent } from './login-advisor.component';

describe('LoginAdvisorComponent', () => {
  let component: LoginAdvisorComponent;
  let fixture: ComponentFixture<LoginAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
