import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserServiceComponent } from './list-user-service.component';

describe('ListUserServiceComponent', () => {
  let component: ListUserServiceComponent;
  let fixture: ComponentFixture<ListUserServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserServiceComponent]
    });
    fixture = TestBed.createComponent(ListUserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
