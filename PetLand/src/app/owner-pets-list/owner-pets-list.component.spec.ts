import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPetsListComponent } from './owner-pets-list.component';

describe('OwnerPetsListComponent', () => {
  let component: OwnerPetsListComponent;
  let fixture: ComponentFixture<OwnerPetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerPetsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerPetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
