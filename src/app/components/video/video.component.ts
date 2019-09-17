import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Videos, Video } from 'src/app/interfaces/videos';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() id: number;
  videos: Video[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.loadVideo();
  }

  loadVideo() {
    this.moviesService.getVideos(this.id).subscribe((res: Videos) => {
      const data = res.results;
      data.forEach(element => {
        if (element.site === 'YouTube') {
          this.videos.push(element);
        }
      });
    });
  }

  ngOnChanges() {
    this.videos = [];
    this.loadVideo();
  }

}
