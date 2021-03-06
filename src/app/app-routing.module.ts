import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'consulterCheval/:id',
    loadChildren: './consulter-cheval/consulter-cheval.module#ConsulterChevalPageModule'
  },
  { path: 'consulter-cheval', loadChildren: './consulter-cheval/consulter-cheval.module#ConsulterChevalPageModule' },
  { path: 'cheval/ajouter', loadChildren: './cheval/ajouter/ajouter.module#AjouterPageModule' },
  { path: 'client/lister', loadChildren: './client/lister/lister.module#ListerPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
