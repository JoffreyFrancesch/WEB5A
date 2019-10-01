import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './components/trending/trending.component';
import { RatingComponent } from './components/rating/rating.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsComponent } from './components/details/details.component';
import { SimilarComponent } from './components/similar/similar.component';
import { VideoComponent } from './components/video/video.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { GenreComponent } from './components/genre/genre.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    RatingComponent,
    CardComponent,
    NavbarComponent,
    DetailsComponent,
    SimilarComponent,
    VideoComponent,
    SearchComponent,
    ResultComponent,
    MoviesComponent,
    TvshowsComponent,
    GenreComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxYoutubePlayerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
