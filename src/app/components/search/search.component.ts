import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Result, OMovieSearch } from 'src/app/interfaces/result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: Result[] = [];
  value = '';

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  search(value: string) {
    this.results = [];
    if (value !== '') {
      this.searchService.searchMovie(value).subscribe((res: OMovieSearch) => {
        const data = res.results;
        data.forEach(element => {
          this.results.push(element);
        });
      });
    }
  }

  onEnter(value: string) {
    this.value = '';
    this.router.navigate(['result', value]);
  }

}
