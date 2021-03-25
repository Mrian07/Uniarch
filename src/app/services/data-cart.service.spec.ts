import { TestBed } from '@angular/core/testing';

import { DataCartService } from './data-cart.service';

describe('DataCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCartService = TestBed.get(DataCartService);
    expect(service).toBeTruthy();
  });
});
