import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DiscoverService } from './discover.service';

describe('DiscoverService', () => {
  let injector: TestBed;
  let service: DiscoverService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DiscoverService]
    });
    injector = getTestBed();
    service = injector.get(DiscoverService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTvShowsByGenre', () => {
    const dummyShows = {
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1
    };

    it('should return an Observable<ODiscoverShows>', () => {
      service.getTvShowsByGenre(28).subscribe(shows => {
        expect(shows.page).toBe(1);
        expect(shows.total_pages).toBe(1);
        expect(shows.total_results).toBe(0);
        expect(shows.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}tv?api_key=${service.apiKey}&sort_by=popularity.desc&with_genres=28`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyShows);
    });
  });

  describe('#getMoviesByGenre', () => {
    const dummyMovies = {
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1
    };

    it('should return an Observable<ODiscoverMovies>', () => {
      service.getMoviesByGenre(28).subscribe(movies => {
        expect(movies.page).toBe(1);
        expect(movies.total_pages).toBe(1);
        expect(movies.total_results).toBe(0);
        expect(movies.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}movie?api_key=${service.apiKey}&sort_by=popularity.desc&with_genres=28`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyMovies);
    });
  });

  describe('#showMoreTv', () => {
    const dummyShows = {
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1
    };

    it('should return an Observable<ODiscoverShows>', () => {
      service.showMoreTv(28, 1).subscribe(shows => {
        expect(shows.page).toBe(1);
        expect(shows.total_pages).toBe(1);
        expect(shows.total_results).toBe(0);
        expect(shows.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}tv?api_key=${service.apiKey}&sort_by=popularity.desc&with_genres=28&page=2`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyShows);
    });
  });

  describe('#showMoreMovie', () => {
    const dummyMovies = {
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1
    };

    it('should return an Observable<ODiscoverMovies>', () => {
      service.showMoreMovie(28, 1).subscribe(movies => {
        expect(movies.page).toBe(1);
        expect(movies.total_pages).toBe(1);
        expect(movies.total_results).toBe(0);
        expect(movies.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}movie?api_key=${service.apiKey}&sort_by=popularity.desc&with_genres=28&page=2`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyMovies);
    });
  });

});
