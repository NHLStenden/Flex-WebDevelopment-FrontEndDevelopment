import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeftijdComponent } from './leeftijd.component';

describe('LeeftijdComponent', () => {
  let component: LeeftijdComponent;
  let fixture: ComponentFixture<LeeftijdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeeftijdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeftijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
