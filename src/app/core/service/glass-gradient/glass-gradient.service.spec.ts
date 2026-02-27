import { TestBed } from '@angular/core/testing';

import { GlassGradientService } from './glass-gradient.service';

describe('GlassGradientService', () => {
  let service: GlassGradientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlassGradientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
