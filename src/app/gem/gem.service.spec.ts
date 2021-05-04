import { TestBed } from '@angular/core/testing';

import { GemService } from './gem.service';

describe('GemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GemService = TestBed.get(GemService);
    expect(service).toBeTruthy();
  });
});
