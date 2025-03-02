import { TestBed } from '@angular/core/testing';

import { ExercicioFirebaseService } from './exercicio-firebase.service';

describe('ExercicioFirebaseService', () => {
  let service: ExercicioFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExercicioFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
