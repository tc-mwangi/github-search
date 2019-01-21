import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'

import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

// paths
const routes:Routes=[
  {path:"landing",component:LandingPageComponent},
  {path:"profile",component:ProfilePageComponent},
  {path:"search",component:SearchPageComponent},
  {path:"",redirectTo:"/landing",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
