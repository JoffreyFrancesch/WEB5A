import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Similar, OSimilar } from 'src/app/interfaces/similar';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit, OnChanges {
  @Input() id: number;
  similar: Similar[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.loadSimilar();
  }

  loadSimilar() {
    this.movieService.getSimilar(this.id).subscribe((res: OSimilar) => {
      const data = res.results;
      data.forEach(element => {
        this.similar.push(element);
      });
    });
  }

  ngOnChanges() {
    this.similar = [];
    this.loadSimilar();
  }

}
