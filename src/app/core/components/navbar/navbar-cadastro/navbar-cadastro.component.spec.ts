import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNavbarComponent } from './navbar-cadastro.component';

describe('NavbarComponent', () => {
  let component: CadastroNavbarComponent;
  let fixture: ComponentFixture<CadastroNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroNavbarComponent]
    });
    fixture = TestBed.createComponent(CadastroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
