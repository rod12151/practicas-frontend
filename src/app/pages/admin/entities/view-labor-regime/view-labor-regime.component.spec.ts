import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLaborRegimeComponent } from './view-labor-regime.component';

describe('ViewLaborRegimeComponent', () => {
  let component: ViewLaborRegimeComponent;
  let fixture: ComponentFixture<ViewLaborRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLaborRegimeComponent]
    });
    fixture = TestBed.createComponent(ViewLaborRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
