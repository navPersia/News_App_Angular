import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NewsItem } from '../_models/news/NewsItem';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newsitems: NewsItem[] = [];
  newsChanged: NewsItem;
  
  constructor(
    private http: HttpClient, 
    public authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    if (this.authService.isAdmin()){
      this.getArtikelReview();
    }
  }

  getArtikelReview(){
    this.http.get<any>('/api/article/').subscribe(
      response => {
        console.log("2");

        response.forEach(element => {
          if (element.ArticleStatusID == "5fc1cae4f2f44e5ae4e54dd1"){
            this.newsitems.push(element);
          }
        });
      }
    )
  }

  accept(id){
    console.log(id);
    this.http.get<any>('/api/article/'+id).subscribe(
      response => {
        this.newsChanged = response;
        this.newsChanged.ArticleStatusID = "5fc1cad2f2f44e5ae4e54dd0";
        console.log(this.newsChanged);
        this.http.put<any>('/api/Article/' + id, this.newsChanged).subscribe(
          response => {
            console.log(JSON.stringify(this.newsChanged.ArticleStatusID));
            this.router.navigate(['/admin']);
          }
        );
      }
    )
  }

}
