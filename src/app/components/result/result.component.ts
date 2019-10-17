import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Result, ResultTv } from 'src/app/interfaces/result';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: Result[] | ResultTv[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    let query: string;
    this.route.paramMap.pipe(
      map( params => {
        query = params.get('query');
        this.results = [];
        this.searchService.search(query).subscribe((res: any) => {
          const data = res.results;
          data.forEach(element => {
            if (element.poster_path !=  null ) {
              if (element.name) {
                element.type = 'tvshows';
              } else if (element.title) {
                element.type = 'movies';
              }
              this.results.push(element);
            }
          });
        });
      })
    ).subscribe();
  }

}
