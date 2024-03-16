import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserAsigServicioComponent } from './table-user-asig-servicio.component';

describe('TableUserAsigServicioComponent', () => {
  let component: TableUserAsigServicioComponent;
  let fixture: ComponentFixture<TableUserAsigServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableUserAsigServicioComponent]
    });
    fixture = TestBed.createComponent(TableUserAsigServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
