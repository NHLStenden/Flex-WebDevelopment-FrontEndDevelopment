import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntry01Component } from './data-entry01.component';

describe('DataEntry01Component', () => {
  let component: DataEntry01Component;
  let fixture: ComponentFixture<DataEntry01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntry01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntry01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
