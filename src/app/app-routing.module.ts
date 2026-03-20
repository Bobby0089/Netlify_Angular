import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service'; 

const routes: Routes = [
  { path: '', redirectTo: 'auth/Home', pathMatch: 'full'},
  {
    path:"admin",
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthguardService],       
    data:{ role:'ROLE_ADMIN' }            
  },
  {
    path:"user",
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),
    canActivate:[AuthguardService],       
    data:{ role:'ROLE_CUSTOMER' }        
  },
  {
    path:"auth",
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }











// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'auth/Home', pathMatch: 'full'},
//   {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
//   {path:"user",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
//   {path:"auth",loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
