import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/module/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/module/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/module/categories.module').then( m => m.CategoriesModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/module/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'quote',
    loadChildren: () => import('./pages/quote/module/quote.module').then( m => m.QuotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
