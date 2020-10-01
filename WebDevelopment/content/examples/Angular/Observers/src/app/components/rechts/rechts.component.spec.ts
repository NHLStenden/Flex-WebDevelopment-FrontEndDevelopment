import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtsComponent } from './rechts.component';

describe('RechtsComponent', () => {
  let component: RechtsComponent;
  let fixture: ComponentFixture<RechtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
