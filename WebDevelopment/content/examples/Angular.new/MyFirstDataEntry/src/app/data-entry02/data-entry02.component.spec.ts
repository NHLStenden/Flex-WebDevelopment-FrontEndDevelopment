import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntry02Component } from './data-entry02.component';

describe('DataEntry02Component', () => {
  let component: DataEntry02Component;
  let fixture: ComponentFixture<DataEntry02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntry02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntry02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
