import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { GenresService } from './genres.service';

describe('GenresService', () => {
  let injector: TestBed;
  let service: GenresService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenresService]
    });
    injector = getTestBed();
    service = injector.get(GenresService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMoviesGenres', () => {
    const dummyGenres = {
      genres: []
    };

    it('should return Observables<Genres>', () => {
      service.getMoviesGenres().subscribe(genres => {
        expect(genres.genres.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}movie/list?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyGenres);
    });
  });

  describe('#getTvGenres', () => {
    const dummyGenres = {
      genres : []
    };

    it('should return Observables<Genres>', () => {
      service.getTvGenres().subscribe(genres => {
        expect(genres.genres.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}tv/list?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyGenres);
    });

  });

});
