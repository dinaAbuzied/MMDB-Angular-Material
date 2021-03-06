import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'search', loadChildren: './pages/search/search.module#SearchModule', canActivate: [AuthGuard] },
  { path: 'my_movies', loadChildren: './pages/my-movies/my-movies.module#MyMoviesModule', canActivate: [AuthGuard] },
  { path: 'statistics', loadChildren: './pages/statistics/statistics.module#StatisticsModule', canActivate: [AuthGuard] },
  { path: 'lists', loadChildren: './pages/lists/lists.module#ListsModule', canActivate: [AuthGuard] },
  { path: '**', loadChildren: './pages/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
