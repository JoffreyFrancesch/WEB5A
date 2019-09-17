import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = '1907085acdbf6dd186e8d57ae562a651';
  private baseUrl = 'https://api.themoviedb.org/3/movie/';

  constructor(private httpClient: HttpClient) { }

  getMovieDetail(id: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    const url = this.baseUrl + id;
    return this.httpClient.get(url, { params });
  }

}
