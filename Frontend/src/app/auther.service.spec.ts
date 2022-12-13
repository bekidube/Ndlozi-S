import { TestBed } from '@angular/core/testing';

import { AutherService } from './auther.service';

describe('AutherService', () => {
  let service: AutherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
