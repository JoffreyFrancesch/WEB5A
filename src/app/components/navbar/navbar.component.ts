import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Genres } from 'src/app/interfaces/genres';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  tvGenres: Genres;
  movieGenres: Genres;
  path: string;

  constructor(private genresService: GenresService, public router: Router) { }

  ngOnInit() {
    this.genresService.getMoviesGenres().subscribe((res: Genres) => {
      this.movieGenres = res;
    });

    this.genresService.getTvGenres().subscribe((res: Genres) => {
      this.tvGenres = res;
    });
  }

}
