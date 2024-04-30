import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficGeneroForServicioComponent } from './grafic-genero-for-servicio.component';

describe('GraficGeneroForServicioComponent', () => {
  let component: GraficGeneroForServicioComponent;
  let fixture: ComponentFixture<GraficGeneroForServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficGeneroForServicioComponent]
    });
    fixture = TestBed.createComponent(GraficGeneroForServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
