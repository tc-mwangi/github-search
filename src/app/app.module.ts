import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './services/user-service/user.service';
import { RepositoryService } from './services/repo-service/repository.service';
import { AlertsService } from './services/alert-service/alerts.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProfilePageComponent,
    SearchPageComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, RepositoryService, AlertsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
