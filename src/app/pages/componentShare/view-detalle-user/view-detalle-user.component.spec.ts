import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetalleUserComponent } from './view-detalle-user.component';

describe('ViewDetalleUserComponent', () => {
  let component: ViewDetalleUserComponent;
  let fixture: ComponentFixture<ViewDetalleUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDetalleUserComponent]
    });
    fixture = TestBed.createComponent(ViewDetalleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
