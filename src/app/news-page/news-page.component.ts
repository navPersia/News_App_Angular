import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from '../_models/news/NewsItem';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  newsitem: NewsItem;
  id;

  constructor(private http: HttpClient, private route : ActivatedRoute, public authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      let id = params.get('id');
      this.id = id;
    });
    console.log(this.id);
    this.getArtikel(this.id);
  }

  getArtikel(id){
    this.http.get<any>('/api/article/' + id).subscribe(
      response => {
        console.log(response);
        this.newsitem = response;
      }
    )
  }

  newComment(input: HTMLInputElement){
    let comment = { 
      Name: localStorage.getItem("FirstName"),
      Comment: input.value
     };

     this.newsitem.Comments.push(comment);

    input.value = "";

    this.http.put<any>('/api/article/' + this.id, this.newsitem).subscribe(
      response => {
        console.log(JSON.stringify(this.newsitem.Comments));
      }
    );
  }

}
