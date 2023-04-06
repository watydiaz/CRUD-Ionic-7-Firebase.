import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'form-tickets',
    loadComponent: () => import('./form-tickets/form-tickets.page').then( m => m.FormTicketsPage)
  },
  {
    path: 'set-products',
    loadComponent: () => import('./set-products/set-products.page').then( m => m.SetProductsPage)
  },
  {
    path: 'tarjeta',
    loadComponent: () => import('./tarjeta/tarjeta.page').then( m => m.TarjetaPage)
  },
  {
    path: 'show',
    loadComponent: () => import('./show/show.page').then( m => m.ShowPage)
  },
  {
    path: 'create',
    loadComponent: () => import('./create/create.page').then( m => m.CreatePage)
  },
  {
    path: 'edit',
    loadComponent: () => import('./edit/edit.page').then( m => m.EditPage)
  },














];
