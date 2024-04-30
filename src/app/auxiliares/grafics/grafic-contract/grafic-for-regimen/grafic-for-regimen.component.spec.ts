import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficForRegimenComponent } from './grafic-for-regimen.component';

describe('GraficForRegimenComponent', () => {
  let component: GraficForRegimenComponent;
  let fixture: ComponentFixture<GraficForRegimenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficForRegimenComponent]
    });
    fixture = TestBed.createComponent(GraficForRegimenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
