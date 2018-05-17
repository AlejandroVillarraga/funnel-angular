import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SitesPageComponent } from './pages/sites-page/sites-page.component';
import { SearchSitePageComponent } from './pages/search-site-page/search-site-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SiteProfileComponent } from './pages/site-profile/site-profile.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Nuevos imports
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';

import { SignUpPageComponent } from './pages/sign-up/sign-up-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';

import { CouponPageComponent } from './pages/coupon-page/coupon-page.component';


import { UsersService } from './services/users.service';
import { TownService } from './services/town.service';
import { CategoryService } from './services/category.service';
import { NgxSlideshowModule } from 'ngx-slideshow';





const ROUTES = [
{ path: 'signin', component: SignInPageComponent },
{ path: 'categorys', component: CategoryPageComponent },
{ path: 'siteProfile', component: SiteProfileComponent },
{ path: 'sites', component: SitesPageComponent },
{ path: 'signup', component: SignUpPageComponent },
{ path: 'contact', component: InformationPageComponent },
{ path: 'coupon', component: CouponPageComponent },
{path: 'searchSite', component: SearchSitePageComponent},
{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SitesPageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    CategoryPageComponent,
    SiteProfileComponent,
    SignUpPageComponent,
    CouponPageComponent,
    InformationPageComponent,
    SearchSitePageComponent
  ],
  imports: [
    NgxSlideshowModule.forRoot(),
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    AppConfiguration,
    APIService,
    AuthService,
    AppDataService,
    UsersService,
    CategoryService,
    TownService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
