import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPlanComponent } from './health-plan.component';

describe('HealthPlanComponent', () => {
  let component: HealthPlanComponent;
  let fixture: ComponentFixture<HealthPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
