import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlateComponent } from './main-plate.component';

describe('MainPlateComponent', () => {
  let component: MainPlateComponent;
  let fixture: ComponentFixture<MainPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
