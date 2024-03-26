import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServRegConComponent } from './edit-serv-reg-con.component';

describe('EditServRegConComponent', () => {
  let component: EditServRegConComponent;
  let fixture: ComponentFixture<EditServRegConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditServRegConComponent]
    });
    fixture = TestBed.createComponent(EditServRegConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
