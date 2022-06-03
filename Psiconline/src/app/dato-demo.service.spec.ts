import { TestBed } from '@angular/core/testing';

import { DatoDemoService } from './dato-demo.service';

describe('DatoDemoService', () => {
  let service: DatoDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
