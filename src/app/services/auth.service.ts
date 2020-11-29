import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../_models/news/User";
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  
  login(credentials) { 
   return this.http.post('/api/user/authenticate', 
   credentials)
      .map(response =>{
        let result = response;
        if(result && result["AccessToken"]){
          localStorage.setItem('AccessToken', result["AccessToken"]);
          localStorage.setItem('FirstName', result["FirstName"]);
          localStorage.setItem('Role', result["Role"]);
          localStorage.setItem('Id', result["Id"]);
          return true;
        }
        else{
          return false;
        }
      } );
  }

  logout() { 
    console.log("test");
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('FirstName');
    localStorage.removeItem('Role');
  }

  isLoggedIn() { 
    // return tokenNotExpired();
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('AccessToken');
    if (!accessToken){
      return false;
    }
    let expirationDate = jwtHelper.getTokenExpirationDate(accessToken);
    let isExpired = jwtHelper.isTokenExpired(accessToken);
    console.log("Expiration", expirationDate);
    console.log("Expired", isExpired);
    return !isExpired;
  }

  get currentUser(){
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('AccessToken');

    if(!accessToken) return null;

    console.log(jwtHelper.decodeToken(accessToken));
    return jwtHelper.decodeToken(accessToken);
  }

  get userRol(){
    let jwtHelper = new JwtHelperService();
    let accessToken = localStorage.getItem('AccessToken');

    if(!accessToken) return null;

    console.log(jwtHelper.decodeToken(accessToken));
    return jwtHelper.decodeToken(accessToken);
  }

  register(credentials){
    return this.http.post('/api/User/',
    credentials)
      .map(response =>{
        let result = response;
        if(result){
          console.log(result);
          return true;
        }
        else{
          return false;
        }
      } );
  }

  user: User;
  registerJournalist(credentials){
    this.user = credentials;
    this.user.RoleID = "5fc032b33a453063ec310b6c";
    return this.http.post('/api/User/',
    this.user)
      .map(response =>{
        let result = response;
        if(result){
          console.log(result);
          return true;
        }
        else{
          return false;
        }
      } );
  }

  isAdmin() { 
    let role = localStorage.getItem('Role');
    if (role == "Admin"){
      return true;
    }else{
      return false;
    }
  }

  isJournalist(){
    let role = localStorage.getItem('Role');
    if (role == "Journalist"){
      return true;
    }else{
      return false;
    }
  }

  newBlog(post){
    return this.http.post('/api/Article/',
    post)
      .map(response =>{
        let result = response;
        if(result){
          console.log(result);
          return true;
        }
        else{
          return false;
        }
      } );
  }
}

