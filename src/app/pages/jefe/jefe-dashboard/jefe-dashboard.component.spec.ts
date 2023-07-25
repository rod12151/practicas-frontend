import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeDashboardComponent } from './jefe-dashboard.component';

describe('JefeDashboardComponent', () => {
  let component: JefeDashboardComponent;
  let fixture: ComponentFixture<JefeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefeDashboardComponent]
    });
    fixture = TestBed.createComponent(JefeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
