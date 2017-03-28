import { TestBed, inject } from '@angular/core/testing';

import { Ng2TrainService } from './ng2-train.service';

describe('Ng2TrainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2TrainService]
    });
  });

  it('should ...', inject([Ng2TrainService], (service: Ng2TrainService) => {
    expect(service).toBeTruthy();
  }));
});
