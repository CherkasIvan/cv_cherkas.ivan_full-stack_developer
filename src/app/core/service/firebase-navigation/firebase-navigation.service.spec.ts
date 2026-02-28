import { TestBed } from '@angular/core/testing';

import { FirebaseNavigationService } from './firebase-navigation.service';

describe('FirebaseNavigationService', () => {
  let service: FirebaseNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
