import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TrendingService } from './trending.service';

describe('TrendingService', () => {
  let injector: TestBed;
  let service: TrendingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrendingService]
    });
    injector = getTestBed();
    service = injector.get(TrendingService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTrendingDay', () => {
    const dummyTrending = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };

    it('should return an Observable<OTrending> with no filter', () => {
      service.getTrendingDay().subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}all/day?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);

    });

    it('sould return an Observable<OTrending> filter by tvShow', () => {
      service.getTrendingDay('tv').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}tv/day?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);
    });

    it('should return an Observable<OTrending> filter by movie', () => {
      service.getTrendingDay('movie').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}movie/day?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);
    });

    it('should return an Observable<OTrending> filter by person', () => {
      service.getTrendingDay('person').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}person/day?api_key=${service.apiKey}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);
    });

  });

  describe('#getTrendingWeek', () => {
    const dummyTrending = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };

    it('should return an Observable<OTrending> with no filter', () => {
      service.getTrendingWeek().subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}all/week?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);

    });
    it('should return an Observable<OTrending> filter by movie', () => {
      service.getTrendingWeek('movie').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}movie/week?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);

    });
    it('should return an Observable<OTrending> filter by tvShow', () => {
      service.getTrendingWeek('tv').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}tv/week?api_key=${service.apiKey}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);
    });
    it('should return an Observable<OTrending> filter by person', () => {
      service.getTrendingWeek('person').subscribe(trending => {
        expect(trending.page).toBe(1);
        expect(trending.total_pages).toBe(1);
        expect(trending.total_results).toBe(0);
        expect(trending.results.length).toBe(0);
      });

      const req = httpMock.expectOne(
        `${service.baseUrl}person/week?api_key=${service.apiKey}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyTrending);
    });

  });

});
