import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { TvShows } from 'src/app/interfaces/tv-shows';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: Movie;
  tvShows: TvShows;

  constructor(private moviesServies: MoviesService, private tvShowsService: TvShowsService , private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    let type: string;
    this.route.paramMap.pipe(
      map( params => {
        id = parseInt(params.get('id'), 10);
        type = params.get('type');
        if (type === 'movies') {
          this.moviesServies.getMovieDetail(id).subscribe((res: Movie) => {
          this.movie = res;
          this.tvShows = null;
        });
        } else if (type === 'tvshows') {
          this.tvShowsService.getDetail(id).subscribe((res) => {
            this.tvShows = res;
            this.movie = null;
          });
        }

      })
    ).subscribe();
  }

}
