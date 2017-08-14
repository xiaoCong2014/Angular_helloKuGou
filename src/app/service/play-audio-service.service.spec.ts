import { TestBed, inject } from '@angular/core/testing';

import { PlayAudioServiceService } from './play-audio-service.service';

describe('PlayAudioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayAudioServiceService]
    });
  });

  it('should be created', inject([PlayAudioServiceService], (service: PlayAudioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
