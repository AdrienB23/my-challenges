import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = 'assets/data/articles.json';

  constructor(private http: HttpClient) {  }

  getArticles(): Article[] {
    const articles: Article[] = []
    this.http.get(this.articleUrl).subscribe(
      data => {
        (data as any).articles.forEach((article: Article) => {
          articles.push(article);
        })
        console.log((data as any).articles);
      }
    );
    return articles;
  }
}
