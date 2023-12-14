import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaInteraccionComponent } from './pantalla-interaccion.component';

describe('PantallaInteraccionComponent', () => {
  let component: PantallaInteraccionComponent;
  let fixture: ComponentFixture<PantallaInteraccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantallaInteraccionComponent]
    });
    fixture = TestBed.createComponent(PantallaInteraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
