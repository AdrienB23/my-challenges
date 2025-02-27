import { Injectable } from '@angular/core';
import { ArticleText } from '../models/article-text';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = 'assets/data/articles.json';

  constructor(private http: HttpClient) {  }

  getArticles(): ArticleText[] {
    const articles: ArticleText[] = []
    this.http.get(this.articleUrl).subscribe(
      data => {
        (data as any).articles.forEach((article: ArticleText) => {
          articles.push(article);
        })
        console.log((data as any).articles);
      }
    );
    return articles;
  }
}
