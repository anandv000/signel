import { TestBed } from '@angular/core/testing';

import { SignelService } from './signel.service';

describe('SignelService', () => {
  let service: SignelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
