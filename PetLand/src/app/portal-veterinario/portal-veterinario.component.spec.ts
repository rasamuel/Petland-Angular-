import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalVeterinarioComponent } from './portal-veterinario.component';

describe('PortalVeterinarioComponent', () => {
  let component: PortalVeterinarioComponent;
  let fixture: ComponentFixture<PortalVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
