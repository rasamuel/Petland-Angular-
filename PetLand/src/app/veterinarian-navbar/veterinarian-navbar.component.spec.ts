import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianNavbarComponent } from './veterinarian-navbar.component';

describe('VeterinarianNavbarComponent', () => {
  let component: VeterinarianNavbarComponent;
  let fixture: ComponentFixture<VeterinarianNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinarianNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinarianNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
