import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trending, OTrending } from '../interfaces/trending';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  readonly apiKey = '1907085acdbf6dd186e8d57ae562a651';
  readonly baseUrl = 'https://api.themoviedb.org/3/trending/';

  constructor(private httpClient: HttpClient) { }

  getTrendingWeek(media?: string): Observable<OTrending> {
    let url = this.baseUrl;
    if (media) {
      url += media + '/week';
    } else {
      url += 'all/week';
    }
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get<OTrending>(url, {params});
  }

  getTrendingDay(media?: string): Observable<OTrending> {
    let url = this.baseUrl;
    if (media) {
       url += media + '/day';
    } else {
       url += 'all/day';
    }
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.httpClient.get<OTrending>(url, { params });
  }

}
