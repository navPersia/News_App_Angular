import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NewsItem } from "../_models/news/NewsItem";

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  newsitems: NewsItem[] = [];

  constructor(private http: HttpClient, public authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAdmin()){
      this.getArtikel();
    }else{
      this.getArtikelUser();
    }
  }

  getArtikel(){
    this.http.get<any>('/api/article/').subscribe(
      response => {
        console.log(response);
        this.newsitems = response;
      }
    )
  }

  getArtikelUser(){
    this.http.get<any>('/api/article/').subscribe(
      response => {
        console.log("2");

        response.forEach(element => {
          if (element.ArticleStatusID == "5fc1cad2f2f44e5ae4e54dd0"){
            this.newsitems.push(element);
          }
        });
      }
    )
  }
}
