import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlyCss3Component } from './htmly-css3.component';

describe('HtmlyCss3Component', () => {
  let component: HtmlyCss3Component;
  let fixture: ComponentFixture<HtmlyCss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlyCss3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlyCss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
