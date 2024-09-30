import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePetsComponent } from './inactive-pets.component';

describe('InactivePetsComponent', () => {
  let component: InactivePetsComponent;
  let fixture: ComponentFixture<InactivePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactivePetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactivePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
