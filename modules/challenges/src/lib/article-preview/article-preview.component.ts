import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { HostListener } from "@angular/core";
import { ArticleService } from './article.service';

@Component({
  selector: 'lib-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})

export class ArticlePreviewComponent implements OnInit {
  articles: Article [] = [];
  shareHover = false;
  shareClick = false;
  screenHeight!: number;
  screenWidth!: number;
  mobileClicked= false;


  constructor(private articleService: ArticleService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.mobileClicked = this.shareClick && this.screenWidth <= 800;
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articles = this.articleService.getArticles();
  }

  shareHovered(value: boolean): void {
    this.shareHover = value;
    this.shareColorChange(value || this.shareClick);
  }

  shareClicked() {
    this.shareClick = !this.shareClick;
    this.shareColorChange(this.shareClick ||this.shareHover);
    this.mobileClicked = this.shareClick && this.screenWidth <= 800;
  }

  private shareColorChange(value: boolean) {
    const shareElement = document.getElementById("share");
    if (shareElement !== null) {
      shareElement.style.backgroundColor = value ? 'hsl(214, 17%, 51%)': 'hsl(210, 46%, 95%)';
    }
  }

  protected readonly window = window;
}
