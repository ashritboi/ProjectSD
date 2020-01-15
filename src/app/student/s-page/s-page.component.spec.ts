import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPageComponent } from './s-page.component';

describe('SPageComponent', () => {
  let component: SPageComponent;
  let fixture: ComponentFixture<SPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
