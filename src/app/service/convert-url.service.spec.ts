import { TestBed, inject } from '@angular/core/testing';

import { ConvertUrlService } from './convert-url.service';

describe('ConvertUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertUrlService]
    });
  });

  it('should be created', inject([ConvertUrlService], (service: ConvertUrlService) => {
    expect(service).toBeTruthy();
  }));
});
