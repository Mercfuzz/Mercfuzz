import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationNavComponent } from './presentation-nav.component';

describe('PresentationNavComponent', () => {
  let component: PresentationNavComponent;
  let fixture: ComponentFixture<PresentationNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationNavComponent]
    });
    fixture = TestBed.createComponent(PresentationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
