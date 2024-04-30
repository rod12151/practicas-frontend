import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficAllGeneroComponent } from './grafic-all-genero.component';

describe('GraficAllGeneroComponent', () => {
  let component: GraficAllGeneroComponent;
  let fixture: ComponentFixture<GraficAllGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficAllGeneroComponent]
    });
    fixture = TestBed.createComponent(GraficAllGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
