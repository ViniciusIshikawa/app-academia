import { TestBed } from '@angular/core/testing';

import { TreinoFirebaseService } from './treino-firebase.service';

describe('TreinoFirebaseService', () => {
  let service: TreinoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreinoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
