import { TestBed } from '@angular/core/testing';

import { ErrorResponseInterceptor } from './error-response.interceptor';

describe('ErrorResponseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorResponseInterceptor = TestBed.get(ErrorResponseInterceptor);
    expect(service).toBeTruthy();
  });
});
