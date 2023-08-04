import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksTemplateComponent } from './thanks-template.component';

describe('ThanksTemplateComponent', () => {
  let component: ThanksTemplateComponent;
  let fixture: ComponentFixture<ThanksTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanksTemplateComponent]
    });
    fixture = TestBed.createComponent(ThanksTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
