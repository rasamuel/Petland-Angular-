import { TestBed } from '@angular/core/testing';

import { AuthVeterinarioService } from './auth-veterinario.service';

describe('AuthVeterinarioService', () => {
  let service: AuthVeterinarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthVeterinarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
