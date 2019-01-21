import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import{ Repo } from '../classes/repo'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  providers:[UserService],
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  user:User;
  repos:Repo;
  reposArray:any[];
  public username:string;

  constructor(private userProfile:UserService) { }

  searchUser(){
    this.userProfile.updateProfile(this.username);
    this.userProfile.profileRequest();
    this.userProfile.repoRequest();
    this.userProfile = this.userProfile.reposArray;
  }

  ngOnInit() {
    this.userProfile.profileRequest();
    this.userProfile = this.userProfile.profile;

    this.userProfile.repoRequest();
    this.reposArray = this.userProfile.reposArray;
  }

}
