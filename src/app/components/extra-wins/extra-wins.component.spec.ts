import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraWinsComponent } from './extra-wins.component';

describe('ExtraWinsComponent', () => {
  let component: ExtraWinsComponent;
  let fixture: ComponentFixture<ExtraWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraWinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
