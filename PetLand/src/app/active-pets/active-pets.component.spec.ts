import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePetsComponent } from './active-pets.component';

describe('ActivePetsComponent', () => {
  let component: ActivePetsComponent;
  let fixture: ComponentFixture<ActivePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
