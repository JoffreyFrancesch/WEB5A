import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let injector: TestBed;
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#searchMovie', () => {
    const dummySearch = {
      page: 1,
      results: [],
      total_results: 0,
      total_pages: 1
    };

    it('should return an Observable<OMovieSearch>', () => {
      service.searchMovie('the godfather').subscribe(search => {
        expect(search.page).toBe(1);
        expect(search.total_pages).toBe(1);
        expect(search.total_results).toBe(0);
        expect(search.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}/movie?api_key=${service.apiKey}&query=the%20godfather`);
      expect(req.request.method).toBe('GET');
      req.flush(dummySearch);
    });
  });

});
