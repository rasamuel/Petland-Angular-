import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianEditComponent } from './veterinarian-edit.component';

describe('VeterinarianEditComponent', () => {
  let component: VeterinarianEditComponent;
  let fixture: ComponentFixture<VeterinarianEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinarianEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinarianEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
