import { TestBed } from '@angular/core/testing';

import { CarroResolverGuard } from './carro-resolver.guard';

describe('CarroResolverGuard', () => {
  let guard: CarroResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarroResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
