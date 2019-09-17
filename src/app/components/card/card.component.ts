import { Component, OnInit, Input } from '@angular/core';
import { Trending } from 'src/app/interfaces/trending';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Trending;

  constructor() { }

  ngOnInit() {
  }

}
