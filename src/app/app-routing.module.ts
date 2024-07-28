import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent,
  },
  { path: 'home', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-detail/:Id', component: PropertyDetailComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'add-property', component: AddpropertyComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
