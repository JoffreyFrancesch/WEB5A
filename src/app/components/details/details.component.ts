import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/interfaces/movie';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: Movie;

  constructor(private moviesServies: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    this.route.paramMap.pipe(
      map( params => {
        id = parseInt(params.get('id'), 10);
        this.moviesServies.getMovieDetail(id).subscribe((res: Movie) => {
          this.movie = res;
        });
      })
    ).subscribe();
  }

}
