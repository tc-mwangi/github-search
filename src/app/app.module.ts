import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { UserService } from './services/user-service/user.service';
import { RepositoryService } from './services/repo-service/repository.service';
import { AlertsService } from './services/alert-service/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {RoutingModule} from './routing/routing.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProfilePageComponent,
    SearchPageComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpModule,
    FormsModule,
    RoutingModule
    
  ],
  providers: [UserService, RepositoryService, AlertsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
