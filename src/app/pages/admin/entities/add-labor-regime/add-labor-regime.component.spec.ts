import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaborRegimeComponent } from './add-labor-regime.component';

describe('AddLaborRegimeComponent', () => {
  let component: AddLaborRegimeComponent;
  let fixture: ComponentFixture<AddLaborRegimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLaborRegimeComponent]
    });
    fixture = TestBed.createComponent(AddLaborRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
