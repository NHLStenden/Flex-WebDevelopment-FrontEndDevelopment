import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterVisualiserComponent } from './counter-visualiser.component';

describe('CounterVisualiserComponent', () => {
  let component: CounterVisualiserComponent;
  let fixture: ComponentFixture<CounterVisualiserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterVisualiserComponent]
    });
    fixture = TestBed.createComponent(CounterVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
