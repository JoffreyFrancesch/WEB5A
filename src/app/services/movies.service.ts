import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { OSimilar } from '../interfaces/similar';
import { Videos } from '../interfaces/videos';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = '1907085acdbf6dd186e8d57ae562a651';
  private baseUrl = 'https://api.themoviedb.org/3/movie/';

  constructor(private httpClient: HttpClient) { }

  getMovieDetail(id: number): Observable<Movie> {
    const params = new HttpParams().set('api_key', this.apiKey);
    const url = this.baseUrl + id;
    return this.httpClient.get<Movie>(url, { params });
  }

  getSimilar(id: number): Observable<OSimilar> {
    const params = new HttpParams().set('api_key', this.apiKey);
    const url = this.baseUrl + id + '/similar';
    return this.httpClient.get<OSimilar>(url, { params });
  }

  getVideos(id: number): Observable<Videos>{
    const params = new HttpParams().set('api_key', this.apiKey);
    const url = this.baseUrl + id + '/videos';
    return this.httpClient.get<Videos>(url, {params});
  }

}
