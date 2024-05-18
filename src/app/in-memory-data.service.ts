import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from '../../modules/article-preview/src/lib/article-preview/article';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles: Article[] = [
      {
        id: 1,
        title: 'Shift the overall look and feel by adding these wonderful ' +
          'touches to furniture in your home',
        presentation: 'Ever been in a room and felt like something was ' +
          'missing? Perhaps it felt slightly bare and uninviting. I’ve got ' +
          'some simple tips to help you make any room feel complete.',
        pictureSrc: 'assets/images/drawers.jpg',
        profileSrc: 'assets/images/avatar-michelle.jpg',
        name: 'Michelle Appleton',
        date: '28 Jun 2020'
      },
    ];
    return {articles};
  }
}
