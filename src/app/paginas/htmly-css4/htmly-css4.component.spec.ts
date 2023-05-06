import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlyCss4Component } from './htmly-css4.component';

describe('HtmlyCss4Component', () => {
  let component: HtmlyCss4Component;
  let fixture: ComponentFixture<HtmlyCss4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlyCss4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlyCss4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
