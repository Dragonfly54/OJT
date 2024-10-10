import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myOrderGuard } from './my-order.guard';

describe('myOrderGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myOrderGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
