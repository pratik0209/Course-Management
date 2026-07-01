import { TestBed } from '@angular/core/testing';

import { Courseservices } from './courseservices';

describe('Courseservices', () => {
  let service: Courseservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Courseservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
