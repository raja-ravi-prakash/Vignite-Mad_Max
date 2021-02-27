import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropYearlyComponent } from './crop-yearly.component';

describe('CropYearlyComponent', () => {
  let component: CropYearlyComponent;
  let fixture: ComponentFixture<CropYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropYearlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
