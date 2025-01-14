import { Component } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleServiceService } from '../services/article-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  articles!:Article[]
  isFormAdd:boolean = true;

  artEdit!:Article;

  constructor(private articleService:ArticleServiceService) {
    this.articles = articleService.getArticles();
  }

  edit(art:Article){
    this.onAddArt();
    console.log(art);
    this.artEdit = art;
    
  }

  onAddArt(){
    this.isFormAdd = ! this.isFormAdd;
  }

  ajouter(form: NgForm){
    this.articleService.ajouter(form);
    
    this.onAddArt();
  }


}
