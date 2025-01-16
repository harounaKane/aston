import { Component } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleServiceService } from '../services/article-service.service';
import { NgForm } from '@angular/forms';
import { Categorie } from '../model/Categorie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  articles!:Article[]
  isFormAdd:boolean = true;

  artEdit:Article = new Article(0, "", 0, new Categorie(0, ""), "", new Date, 0);

  constructor(private articleService:ArticleServiceService) {
    this.articles = articleService.getArticles();
  }

  edit(art:Article){
    this.onAddArt();
    this.artEdit = art;
  }

  onAddArt(){
    this.isFormAdd = ! this.isFormAdd;
  }

  ajouter(form: NgForm){
   // this.articleService.ajouter(form);
    
    this.artEdit = new Article(0, "", 0, new Categorie(0, ""), "", new Date, 0);
    this.onAddArt();
  }

  delete(art:Article){
    this.articleService.delete(art);

    this.articles = this.articleService.getArticles();
  }

  like(art:Article){
    if( art.like ){
      art.like--;
    }else{
      art.like++;
    }    

    this.articleService.saveArticle();
  }


}
