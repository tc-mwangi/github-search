import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from '../classes/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;

  constructor(private http:HttpClient) {

  }

  userRequest(){

    interface ApiResponse{
      login: string;
      id: number;
      avatar_url: string;
      url: string;
      repos_url: string

    }

    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
          
          this.user.login=response.login
          this.user.id=response.id
          this.user.lavatar_url=response.avatar_url
          this.user.url=response.url
          this.user.repos_url=response.repos_url

          resolve()
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
