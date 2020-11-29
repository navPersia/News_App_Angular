import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TagItem } from '../_models/news/Tag';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.css']
})
export class JournalistComponent implements OnInit {

  tagItems: TagItem[];
  Id = '';
  invalidRegister: boolean; 

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getTag();
    this.getId();
  }

  getTag(){
    this.http.get<any>('/api/Tag/').subscribe(
      response => {
        console.log(response);
        this.tagItems = response;
      }
    )
  }

  newPost(post){
    console.log("worked");
    console.log(post);
    this.authService.newBlog(post)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidRegister = true; 
      });
  }

  getId(){
    this.Id = localStorage.getItem('Id');
  }

}
