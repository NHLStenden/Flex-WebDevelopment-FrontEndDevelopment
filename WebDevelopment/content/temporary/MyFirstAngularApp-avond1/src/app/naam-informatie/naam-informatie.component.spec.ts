import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaamInformatieComponent } from './naam-informatie.component';

describe('NaamInformatieComponent', () => {
  let component: NaamInformatieComponent;
  let fixture: ComponentFixture<NaamInformatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaamInformatieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaamInformatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
