/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirstServiceService } from './firstService.service';

describe('Service: FirstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstServiceService]
    });
  });

  it('should ...', inject([FirstServiceService], (service: FirstServiceService) => {
    expect(service).toBeTruthy();
  }));
});
