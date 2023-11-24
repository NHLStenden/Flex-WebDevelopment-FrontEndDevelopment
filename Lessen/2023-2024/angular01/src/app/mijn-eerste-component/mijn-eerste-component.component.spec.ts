import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnEersteComponentComponent } from './mijn-eerste-component.component';

describe('MijnEersteComponentComponent', () => {
  let component: MijnEersteComponentComponent;
  let fixture: ComponentFixture<MijnEersteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MijnEersteComponentComponent]
    });
    fixture = TestBed.createComponent(MijnEersteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
