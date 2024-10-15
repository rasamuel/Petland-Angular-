import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailOwnerComponent } from './pet-detail-owner.component';

describe('PetDetailOwnerComponent', () => {
  let component: PetDetailOwnerComponent;
  let fixture: ComponentFixture<PetDetailOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetDetailOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDetailOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
