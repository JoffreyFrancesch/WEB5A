import { TestBed, getTestBed } from '@angular/core/testing';

import { TvShowsService } from './tv-shows.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('TvShowsService', () => {
  let injector: TestBed;
  let service: TvShowsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService]
    });
    injector = getTestBed();
    service = injector.get(MoviesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
