import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ArticleText } from '../../../../../libs/shared/models/article-text';
import { HostListener } from "@angular/core";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ArticleService } from '../../../../../libs/shared/services/article.service';

@Component({
  selector: 'lib-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})

export class ArticlePreviewComponent implements OnInit {
  articles: ArticleText [] = [];
  shareHover: boolean[] = [];
  shareClick: boolean[] = [];
  screenHeight!: number;
  screenWidth!: number;
  mobileClicked: boolean[]= [];


  constructor(private articleService: ArticleService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    for (let i = 0; i < this.articles.length; i++) {
      this.mobileClicked[i] = this.shareClick[i] && this.screenWidth <= 800;
    }
  }

  ngOnInit(): void {
    this.getArticles();
    for (let i = 0; i < this.articles.length; i++) {
      this.shareHover[i] = false;
      this.shareClick[i] = false;
      this.mobileClicked[i] = false;
    }
  }

  getArticles(): void {
    this.articles = this.articleService.getArticles();
  }

  shareHovered(id: number, value: boolean): void {
    this.shareHover[id] = value;
    this.shareColorChange(id, value || this.shareClick[id]);
  }

  shareClicked(id: number) {
    this.shareClick[id] = !this.shareClick[id];
    this.shareColorChange(id, this.shareClick[id] || this.shareHover[id]);
    this.mobileClicked[id] = this.shareClick[id] && this.screenWidth <= 800;
  }

  private shareColorChange(id: number, value: boolean) {
    const shareElement = document.getElementById("share" + id);
    if (shareElement !== null) {
      shareElement.style.backgroundColor = value ? 'hsl(214, 17%, 51%)': 'hsl(210, 46%, 95%)';
    }
  }

  protected readonly window = window;
}
