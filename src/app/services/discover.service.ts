import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ODiscoverMovies, ODiscoverShows } from '../interfaces/discover';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  private apiKey = '1907085acdbf6dd186e8d57ae562a651';
  private baseUrl = 'https://api.themoviedb.org/3/discover/';

  constructor(private httpClient: HttpClient) {}

  getTvShowsByGenre(id: number): Observable<ODiscoverShows> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('sort_by', 'popularity.desc')
      .set('with_genres', id.toString());
    const url = this.baseUrl + 'tv';
    return this.httpClient.get<ODiscoverShows>(url, { params });
  }
  getMoviesByGenre(id: number): Observable<ODiscoverMovies> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('sort_by', 'popularity.desc')
      .set('with_genres', id.toString());
    const url = this.baseUrl + 'movie';
    return this.httpClient.get<ODiscoverMovies>(url, { params });
  }

  showMoreTv(id: number, page: number): Observable<ODiscoverShows> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('sort_by', 'popularity.desc')
      .set('with_genres', id.toString())
      .set('page', (page + 1).toString());
    const url = this.baseUrl + 'tv';
    return this.httpClient.get<ODiscoverShows>(url, {params});
  }

  showMoreMovie(id: number, page: number): Observable<ODiscoverMovies> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('sort_by', 'popularity.desc')
      .set('with_genres', id.toString())
      .set('page', (page + 1).toString());
    const url = this.baseUrl + 'movie';
    return this.httpClient.get<ODiscoverMovies>(url, { params });

  }


}
