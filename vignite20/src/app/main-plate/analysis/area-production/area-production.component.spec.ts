import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaProductionComponent } from './area-production.component';

describe('AreaProductionComponent', () => {
  let component: AreaProductionComponent;
  let fixture: ComponentFixture<AreaProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
