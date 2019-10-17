import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { Trending, OTrending } from 'src/app/interfaces/trending';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trending: Trending[] = [];

  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.trendingService.getTrendingDay('movie').subscribe((res: OTrending) => {
      const data = res.results;
      data.forEach(element => {
        element.type = "movie";
        this.trending.push(element);
      });
    });
  }

}
