import { TestBed } from '@angular/core/testing';

import { FakeAuthUserService } from './fake-auth-user.service';

describe('FakeAuthUserService', () => {
  let service: FakeAuthUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuthUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
