import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'bantuan',
    loadChildren: () => import('./bantuan/bantuan.module').then( m => m.BantuanPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'detailblog',
    loadChildren: () => import('./detailblog/detailblog.module').then( m => m.DetailblogPageModule)
  },
  {
    path: 'detailproduk/:id',
    loadChildren: () => import('./detailproduk/detailproduk.module').then( m => m.DetailprodukPageModule)
  },
  // {
  //   path: 'detailprodukk/:id',
  //   loadChildren: () => import('./detailproduk/detailproduk.module').then( m => m.DetailprodukPageModule)
  // },
  {
    path: 'komisi',
    loadChildren: () => import('./komisi/komisi.module').then( m => m.KomisiPageModule)
  },
  {
    path: 'konfirmasi/:id',
    loadChildren: () => import('./konfirmasi/konfirmasi.module').then( m => m.KonfirmasiPageModule)
  },
  {
    path: 'point',
    loadChildren: () => import('./point/point.module').then( m => m.PointPageModule)
  },
  {
    path: 'detailtransaksi/:id',
    loadChildren: () => import('./detailtransaksi/detailtransaksi.module').then( m => m.DetailtransaksiPageModule)
  },
  {
    path: 'tabs4',
    loadChildren: () => import('./tabs4/tabs4.module').then( m => m.Tabs4PageModule)
  },
  {
    path: 'tabs5',
    loadChildren: () => import('./tabs5/tabs5.module').then( m => m.Tabs5PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'lupa-password',
    loadChildren: () => import('./lupa-password/lupa-password.module').then( m => m.LupaPasswordPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
