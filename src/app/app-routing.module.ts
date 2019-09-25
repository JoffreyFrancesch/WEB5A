import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ResultComponent } from './components/result/result.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { GenreComponent } from './components/genre/genre.component';


const routes: Routes = [{
  path: 'details/:id',
  component: DetailsComponent
}, {
  path: '',
  component: TrendingComponent
}, {
  path: 'result/:query',
  component: ResultComponent
}, {
  path: 'movies',
  component: MoviesComponent
}, {
  path: 'tvshows',
  component: TvshowsComponent
}, {
  path: 'movies/:id',
  component: GenreComponent
}, {
  path: 'tvshows/:id',
  component: GenreComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
