import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Result } from 'src/app/interfaces/result';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: Result[] = [];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    let query: string;
    this.route.paramMap.pipe(
      map( params => {
        query = params.get('query');
        this.results = [];
        this.searchService.searchMovie(query).subscribe((res: any) => {
          const data = res.results;
          data.forEach((element: Result) => {
            if (element.poster_path !=  null ){
              this.results.push(element);
            }
          });
        });
      })
    ).subscribe();
  }

}
