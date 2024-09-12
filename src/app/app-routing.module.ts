import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Inicio/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'header',
    loadChildren: () => import('./Base/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recoverpass',
    loadChildren: () => import('./Inicio/recoverpass/recoverpass.module').then( m => m.RecoverpassPageModule)
  },
  {
    path: 'mainmenu',
    loadChildren: () => import('./Inicio/mainmenu/mainmenu.module').then( m => m.MainmenuPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
