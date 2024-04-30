import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficForServiceComponent } from './grafic-for-service.component';

describe('GraficForServiceComponent', () => {
  let component: GraficForServiceComponent;
  let fixture: ComponentFixture<GraficForServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficForServiceComponent]
    });
    fixture = TestBed.createComponent(GraficForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
