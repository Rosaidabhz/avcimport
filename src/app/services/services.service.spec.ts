import { TestBed } from '@angular/core/testing';

import { ServicesService } from './services.service';

describe('CartWievService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});