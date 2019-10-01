import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genres } from '../interfaces/genres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  readonly apiKey = '1907085acdbf6dd186e8d57ae562a651';
  readonly baseUrl = 'https://api.themoviedb.org/3/genre/';

  constructor(private httpClient: HttpClient) {}

  getMoviesGenres(): Observable<Genres> {
    const params = new HttpParams().set('api_key', this.apiKey);
    const url = this.baseUrl + 'movie/list';
    return this.httpClient.get<Genres>(url, { params });
  }

  getTvGenres(): Observable<Genres> {
     const params = new HttpParams().set('api_key', this.apiKey);
     const url = this.baseUrl + 'tv/list';
     return this.httpClient.get<Genres>(url, { params });
  }
}
