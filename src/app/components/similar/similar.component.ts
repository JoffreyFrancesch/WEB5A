import { Component, OnInit, Input, OnChanges, TestabilityRegistry } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Similar, OSimilar, SimilarTv } from 'src/app/interfaces/similar';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { element } from 'protractor';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit, OnChanges {
  @Input() id: number;
  @Input() type: string;

  similar: Similar[] | SimilarTv[] = [];

  constructor(private movieService: MoviesService, private tvService: TvShowsService) { }

  ngOnInit() {
    this.loadSimilar();
  }

  loadSimilar() {
    if (this.type === 'movie') {
      this.movieService.getSimilar(this.id).subscribe((res: OSimilar) => {
        const data = res.results;
        data.forEach(element => {
          element.type = 'movies';
          this.similar.push(element);
        });
      });
    } else if (this.type === 'tv') {
      this.tvService.getSimilar(this.id).subscribe(res => {
        const data = res.results;
        data.forEach(element => {
          element.type = 'tvshows';
          this.similar.push(element);
        })
      })
    }

  }

  ngOnChanges() {
    this.similar = [];
    this.loadSimilar();
  }

}
