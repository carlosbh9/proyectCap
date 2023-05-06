import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlyCss1Component } from './htmly-css1.component';

describe('HtmlyCss1Component', () => {
  let component: HtmlyCss1Component;
  let fixture: ComponentFixture<HtmlyCss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlyCss1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlyCss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
