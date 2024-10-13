import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianAddComponent } from './veterinarian-add.component';

describe('VeterinarianAddComponent', () => {
  let component: VeterinarianAddComponent;
  let fixture: ComponentFixture<VeterinarianAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinarianAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinarianAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
