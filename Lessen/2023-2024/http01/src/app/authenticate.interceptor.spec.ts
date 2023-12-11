import { TestBed } from '@angular/core/testing';

import { AuthenticateInterceptor } from './authenticate.interceptor';

describe('AuthenticateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticateInterceptor = TestBed.inject(AuthenticateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
