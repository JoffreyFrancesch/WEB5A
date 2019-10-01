import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let injector: TestBed;
  let service: MoviesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
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

  describe('#getMovieDetail', () => {
    const dummyMovie = {
      adult: false,
      backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
      belongs_to_collection: null,
      budget: 63000000,
      genres: [
        {
          id: 18,
          name: 'Drama'
        }
      ],
      homepage: '',
      id: 550,
      imdb_id: 'tt0137523',
      original_language: 'en',
      original_title: 'Fight Club',
      // tslint:disable-next-line: max-line-length
      overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      popularity: 0.5,
      poster_path: null,
      production_companies: [
        {
          id: 508,
          logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
          name: 'Regency Enterprises',
          origin_country: 'US'
        },
        {
          id: 711,
          logo_path: null,
          name: 'Fox 2000 Pictures',
          origin_country: ''
        },
        {
          id: 20555,
          logo_path: null,
          name: 'Taurus Film',
          origin_country: ''
        },
        {
          id: 54050,
          logo_path: null,
          name: 'Linson Films',
          origin_country: ''
        },
        {
          id: 54051,
          logo_path: null,
          name: 'Atman Entertainment',
          origin_country: ''
        },
        {
          id: 54052,
          logo_path: null,
          name: 'Knickerbocker Films',
          origin_country: ''
        },
        {
          id: 25,
          logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
          name: '20th Century Fox',
          origin_country: 'US'
        }
      ],
      production_countries: [
        {
          iso_3166_1: 'US',
          name: 'United States of America'
        }
      ],
      release_date: '1999-10-12',
      revenue: 100853753,
      runtime: 139,
      spoken_languages: [
        {
          iso_639_1: 'en',
          name: 'English'
        }
      ],
      status: 'Released',
      tagline: 'How much can you know about yourself if you\'ve never been in a fight?',
      title: 'Fight Club',
      video: false,
      vote_average: 7.8,
      vote_count: 3439
    };

    const dummyError = {
      status_code: 34,
      status_message: 'The resource you requested could not be found.'
    };

    it('should return an Observable<Movie> for Fight Club Movie', () => {
      service.getMovieDetail(550).subscribe(movie => {
        expect(movie.title).toBe('Fight Club');
        expect(movie.id).toBe(550);
      });

      const req = httpMock.expectOne(`${service.baseUrl}550?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyMovie);
    });

    it('should return an 404 error', () => {
      service.getMovieDetail(555555).subscribe(res => null, err => {
        expect(err.status_message).toBe('The resource you requested could not be found.');
        expect(err.status_code).toBe(34);
      });

      const req = httpMock.expectOne(`${service.baseUrl}555555?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyError);

    });
  });

  describe('#getSimilar', () => {
    const dummySimilar = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0
    };

    it('should return an Observable<OSimilar> for fight club movie', () => {
      service.getSimilar(550).subscribe(similar => {
        expect(similar.page).toBe(1);
        expect(similar.results.length).toBe(0);
        expect(similar.total_pages).toBe(1);
        expect(similar.total_results).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}550/similar?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummySimilar);
    });

  });
  describe('#getVideos', () => {
    const dummyVideos = {
      id : 550,
      results: []
    };

    it('should return an Observable<Videos> for fight club movie', () => {
      service.getVideos(550).subscribe(videos => {
        expect(videos.id).toBe(550);
        expect(videos.results.length).toBe(0);
      });

      const req = httpMock.expectOne(`${service.baseUrl}550/videos?api_key=${service.apiKey}`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyVideos);
    });

  });

});
