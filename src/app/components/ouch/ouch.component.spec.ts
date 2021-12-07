import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuchComponent } from './ouch.component';

describe('OuchComponent', () => {
  let component: OuchComponent;
  let fixture: ComponentFixture<OuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
