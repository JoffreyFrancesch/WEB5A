import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Genre, Genres } from 'src/app/interfaces/genres';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genreService: GenresService) { }

  ngOnInit() {
    this.genreService.getTvGenres().subscribe((res: Genres) => {
      res.genres.forEach( element => {
        this.genres.push(element);
      });
    });
  }

}
