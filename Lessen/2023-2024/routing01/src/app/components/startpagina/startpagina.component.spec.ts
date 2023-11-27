import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpaginaComponent } from './startpagina.component';

describe('StartpaginaComponent', () => {
  let component: StartpaginaComponent;
  let fixture: ComponentFixture<StartpaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartpaginaComponent]
    });
    fixture = TestBed.createComponent(StartpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
