import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrieComponent } from './carrie.component';

describe('CarrieComponent', () => {
  let component: CarrieComponent;
  let fixture: ComponentFixture<CarrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
