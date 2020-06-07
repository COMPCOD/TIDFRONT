import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./fornecedor/fornecedor.module').then( m => m.FornecedorPageModule)
  },
  {
    path: 'contas',
    loadChildren: () => import('./contas/contas.module').then( m => m.ContasPageModule)
  },
  {
    path: 'faculdade',
    loadChildren: () => import('./faculdade/faculdade.module').then( m => m.FaculdadePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'fluxo',
    loadChildren: () => import('./fluxo/fluxo.module').then( m => m.FluxoPageModule)
  },
  {
    path: 'ponto',
    loadChildren: () => import('./ponto/ponto.module').then( m => m.PontoPageModule)
  },
  {
    path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module').then( m => m.DespesasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
