import { TestBed } from '@angular/core/testing';

import { GameBoxService } from './game-box.service';

describe('GameBoxService', () => {
  let service: GameBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
