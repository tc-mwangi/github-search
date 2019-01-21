import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import {  Http, Headers } from '@angular/http'
import { User } from '../classes/user';
import{ Repo } from '../classes/repo'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;
  user:User;
  repo:Repo;
  repoArray:any;
  BaseUrl = environment.BaseUrl;
  FinalUrl = environment.FinalUrl;

  constructor(private http:HttpClient) {
    this.username = 'tc-mwangi';
    this.user = new User ('','','','','','',0,0,0,'');
    this.repo = new Repo('','','');
    this.repoArray = [];
  }

  userRequest(){

    interface ApiResponse{

      name:string,
      login:string,
      location:string,
      avatar_url:string,
      bio:string,
      email:string,
      followers:number,
      following:number,
      public_repos:number,
      html_url:string
    }

    let promise =new Promise((resolve,reject)=>{
      this.http.get(this.BaseUrl + this.username + this.FinalUrl).toPromise().then(response=>{
          
        this.user.name = response.name;
        this.user.login = response.login;
        this.user.location = response.location;
        this.user.avatar_url = response.avatar_url;
        this.user.bio = response.bio;
        this.user.email = response.email;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.public_repos = response.public_repos;
        this.user.html_url = response.html_url ;

          resolve()

          // Test Api response
          console.log("Yoooooo!");
          console.log(this.user);
      },
      error=>{
              this.user.login="tc-mwangi"
              this.user.id="135"
              reject(error)
          }
      )
  })

  return promise
}




}
