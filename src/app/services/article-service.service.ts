import { Injectable } from '@angular/core';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles:Article[] = [
    new Article(10, "PC", 950, 0),
    new Article(12, "Clavier", 50, 1)
  ];

  constructor() { }

  getArticles(){
    return this.articles;
  }

  artById(id:number):Article{
    const article = this.articles.find(art => art.id == id);

    if( !article ) throw new Error(id + " n'existe pas comme identifiant");

    return article;
  }
}
