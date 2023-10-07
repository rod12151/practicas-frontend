import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkConditionComponent } from './add-work-condition.component';

describe('AddWorkConditionComponent', () => {
  let component: AddWorkConditionComponent;
  let fixture: ComponentFixture<AddWorkConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkConditionComponent]
    });
    fixture = TestBed.createComponent(AddWorkConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
