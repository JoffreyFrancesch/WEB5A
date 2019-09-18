import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { TrendingComponent } from './components/trending/trending.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [{
  path: 'details/:id',
  component: DetailsComponent
}, {
  path: '',
  component: TrendingComponent
}, {
  path: 'result/:query',
  component: ResultComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
