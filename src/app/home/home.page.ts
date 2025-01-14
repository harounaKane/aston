import { Component } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  articles!:Article[]

  constructor(private articleService:ArticleServiceService) {
    this.articles = articleService.getArticles();
  }



}
