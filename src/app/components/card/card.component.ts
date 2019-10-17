import { Component, OnInit, Input } from '@angular/core';
import { Trending } from 'src/app/interfaces/trending';
import { DMovie, DShow } from 'src/app/interfaces/discover';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Trending | DMovie | DShow;

  constructor() { }

  ngOnInit() {
  }

}
