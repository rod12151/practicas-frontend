import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractComponent } from './view-contract.component';

describe('ViewContractComponent', () => {
  let component: ViewContractComponent;
  let fixture: ComponentFixture<ViewContractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContractComponent]
    });
    fixture = TestBed.createComponent(ViewContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
