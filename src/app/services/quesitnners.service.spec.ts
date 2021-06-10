import { TestBed } from '@angular/core/testing';

import { QuesitnnersService } from './quesitnners.service';

describe('QuesitnnersService', () => {
  let service: QuesitnnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesitnnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
