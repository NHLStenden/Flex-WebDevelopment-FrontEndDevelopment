import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaamfilterComponent } from './naamfilter.component';

describe('NaamfilterComponent', () => {
  let component: NaamfilterComponent;
  let fixture: ComponentFixture<NaamfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaamfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaamfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
