import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioMascotasTratadasComponent } from './veterinario-mascotas-tratadas.component';

describe('VeterinarioMascotasTratadasComponent', () => {
  let component: VeterinarioMascotasTratadasComponent;
  let fixture: ComponentFixture<VeterinarioMascotasTratadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinarioMascotasTratadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinarioMascotasTratadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
