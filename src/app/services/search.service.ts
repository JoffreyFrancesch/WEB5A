import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OMovieSearch } from '../interfaces/result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = '1907085acdbf6dd186e8d57ae562a651';
  private baseUrl = 'https://api.themoviedb.org/3/search';

  constructor(private httpClient: HttpClient) { }

  searchMovie(query: string): Observable<OMovieSearch> {
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query);
    const url = this.baseUrl + '/movie';
    return this.httpClient.get<OMovieSearch>(url, {params});
  }


}
