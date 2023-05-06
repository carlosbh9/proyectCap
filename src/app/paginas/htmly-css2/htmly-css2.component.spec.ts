import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlyCss2Component } from './htmly-css2.component';

describe('HtmlyCss2Component', () => {
  let component: HtmlyCss2Component;
  let fixture: ComponentFixture<HtmlyCss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlyCss2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlyCss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
