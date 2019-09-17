import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  note: number;
  ratingStar: string[] = [];

  constructor() { }

  ngOnInit() {
    this.note = Math.round(this.rating / 2);
    for (let index = 0; index < 5; index++) {
      if (index < this.note) {
        this.ratingStar.push('checked');
      } else {
        this.ratingStar.push('no-checked');
      }
    }
    /*for (let index = 0; index < 5; index++) {
      if ( index <= Math.round(note)) {
        this.ratingStar.push('checked');
      } else {
        this.ratingStar.push('no-checked');
      }
    }*/
  }

}
