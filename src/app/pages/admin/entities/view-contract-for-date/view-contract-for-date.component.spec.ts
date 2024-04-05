import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractForDateComponent } from './view-contract-for-date.component';

describe('ViewContractForDateComponent', () => {
  let component: ViewContractForDateComponent;
  let fixture: ComponentFixture<ViewContractForDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContractForDateComponent]
    });
    fixture = TestBed.createComponent(ViewContractForDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
