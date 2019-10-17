import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Videos, Video } from 'src/app/interfaces/videos';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() id: number;
  @Input() type: string;
  videos: Video[] = [];

  constructor(private moviesService: MoviesService, private tvService: TvShowsService) { }

  ngOnInit() {
    this.loadVideo();
  }

  loadVideo() {
    if (this.type === 'movie') {
      this.moviesService.getVideos(this.id).subscribe((res: Videos) => {
        const data = res.results;
        data.forEach(element => {
          if (element.site === 'YouTube') {
            this.videos.push(element);
          }
        });
      });
    } else if (this.type === 'tv') {
      this.tvService.getVideos(this.id).subscribe(res => {
        const data = res.results;
        data.forEach(element => {
          if (element.site === 'YouTube') {
            this.videos.push(element);
          }
        })
      })
    }
  }

  ngOnChanges() {
    this.videos = [];
    this.loadVideo();
  }

}
