import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariansListComponent } from './veterinarians-list.component';

describe('VeterinariansListComponent', () => {
  let component: VeterinariansListComponent;
  let fixture: ComponentFixture<VeterinariansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinariansListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinariansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
