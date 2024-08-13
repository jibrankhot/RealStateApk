// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { AppComponent } from './app.component';
// import { PropertyCardComponent } from './property/property-card/property-card.component';
// import { PropertyListComponent } from './property/property-list/property-list.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { AddpropertyComponent } from './property/addproperty/addproperty.component';
// import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { UserLoginComponent } from './user/user-login/user-login.component';
// import { UserRegisterComponent } from './user/user-register/user-register.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// @NgModule({
//   declarations: [
//     AppComponent,
//     PropertyListComponent,
//     PropertyCardComponent,
//     NavBarComponent,
//     AddpropertyComponent,
//     PropertyDetailComponent,
//     PageNotFoundComponent,
//     UserLoginComponent,
//     UserRegisterComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     ReactiveFormsModule,
//     BsDatepickerModule.forRoot(),
//     TabsModule.forRoot(),
//     ButtonsModule.forRoot(),
//     BsDropdownModule.forRoot(),
//     ToastrModule.forRoot({
//       positionClass: 'toast-top-right',
//       timeOut: 3000,
//       maxOpened: 1,
//       preventDuplicates: true,
//       progressAnimation: 'decreasing',
//       progressBar: true,
//       closeButton: true,
//     }),
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { DatePipe } from '@angular/common';
import { PhotoEditorComponent } from './property/photo-editor/photo-editor.component';
import { HttpErrorInterceptorService } from './Services/httperor-interceptor.service';
import { HousingService } from './Services/HousingService';
import { FileUploadModule } from 'ng2-file-upload';
import { AlertyfyToastService } from './Services/alertyfy-toast.service';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent,
    resolve: { prp: PropertyDetailResolverService },
  },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '**', component: PropertyListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent,
    FilterPipe,
    SortPipe,
    PhotoEditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    DatePipe,
    HousingService,
    AlertyfyToastService,

    PropertyDetailResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
