import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Genre, Genres } from 'src/app/interfaces/genres';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private genreService: GenresService) { }

  ngOnInit() {
    this.genreService.getMoviesGenres().subscribe((res: Genres) => {
      res.genres.forEach(element => {
        this.genres.push(element);
      });
    });
  }

}
