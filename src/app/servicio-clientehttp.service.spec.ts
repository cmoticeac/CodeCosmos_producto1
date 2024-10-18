import { TestBed } from '@angular/core/testing';

import { ServicioClientehttpService } from './servicio-clientehttp.service';

describe('ServicioClientehttpService', () => {
  let service: ServicioClientehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioClientehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
