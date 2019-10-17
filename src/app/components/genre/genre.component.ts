import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DiscoverService } from 'src/app/services/discover.service';
import { DMovie, DShow } from 'src/app/interfaces/discover';
import { element } from 'protractor';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  list: DMovie[] | DShow[];
  id: number;
  currentpage: number;
  maxpage: number;
  type: string;

  constructor(private activatedRoute: ActivatedRoute, private discoverService: DiscoverService) { }

  ngOnInit() {
    this.activatedRoute.url.pipe(
      map(params => {
        if (params[0].path === 'tvshows') {
          const id = parseInt(params[1].path, 10);
          this.type = 'tvshows';
          this.id = id;
          this.discoverService.getTvShowsByGenre(id).subscribe(res => {
            this.list = [];
            this.currentpage = res.page;
            this.maxpage = res.total_pages;
            res.results.forEach(element => {
              if ( element.poster_path != null) {
                element.type = "tvshows";
                this.list.push(element);
              }
            });
          });

        } else if (params[0].path === 'movies') {
          const id = parseInt(params[1].path, 10);
          this.type = 'movies';
          this.id = id;
          this.discoverService.getMoviesByGenre(id).subscribe(res => {
            this.list = [];
            this.currentpage = res.page;
            this.maxpage = res.total_pages;
            res.results.forEach(element => {
              if (element.poster_path != null) {
                element.type = "movies";
                this.list.push(element);
              }
            });
          });
        }
      })
    ).subscribe();
  }

  showMore() {
    if (this.type === 'tvshows') {
      if(this.currentpage < this.maxpage){
        this.discoverService.showMoreTv(this.id, this.currentpage).subscribe(res => {
          this.currentpage = res.page;
          res.results.forEach(element => {
            this.list.push(element);
          });
        });
      }
    } else if (this.type === 'movies') {
      if (this.currentpage < this.maxpage) {
        this.discoverService.showMoreMovie(this.id, this.currentpage).subscribe(res => {
          this.currentpage = res.page;
          res.results.forEach(element => {
            this.list.push(element);
          });
        });
      }
    }
  }

  loadPage(page: number) {
    if (this.type === 'tvshows') {
      if (page <= this.maxpage) {
        this.list = [];
        this.discoverService.getShowsPage(this.id, page).subscribe(res => {
          this.currentpage = res.page;
          this.maxpage = res.total_pages;
          res.results.forEach(element => {
            this.list.push(element);
          });
        });
      }
    } else if (this.type === 'movies') {
      if (page <= this.maxpage) {
        this.list = [];
        this.discoverService.getMoviePage(this.id, page).subscribe(res => {
          this.currentpage = res.page;
          this.maxpage = res.total_pages;
          res.results.forEach(element => {
            this.list.push(element);
          });
        });
      }
    }
  }

}
