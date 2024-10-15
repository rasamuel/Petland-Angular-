import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioTratamientoComponent } from './veterinario-tratamiento.component';

describe('VeterinarioTratamientoComponent', () => {
  let component: VeterinarioTratamientoComponent;
  let fixture: ComponentFixture<VeterinarioTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinarioTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinarioTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
