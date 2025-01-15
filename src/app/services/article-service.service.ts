import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles:Article[] = [
    new Article(10, "PC", 950, "Description sur le PC", new Date, 0),
    new Article(12, "Clavier", 50, "Description du clavier ...", new Date, 1),
    new Article(17, "Ecran", 350, "Description de l'écran ...", new Date, 0)
  ];

  constructor() { }

  delete(artToDelete: Article){
    this.articles = this.articles.filter(artBis => artBis.id !== artToDelete.id );
  }

  ajouter(form: NgForm){
    
    if( form.value.id ){
      let oldArt = this.artById(form.value.id);
      oldArt.libelle = form.value.libelle;
      oldArt.prix = form.value.prix;

    }else{
      const id = this.articles.length ? 
                      this.articles[this.articles.length - 1].id + 1 
                      : 1;

      let art = new Article(id, form.value.libelle, form.value.prix, form.value.description, new Date, 0);
  
      this.articles.push( art );

      form.reset();
    }

  }

  getArticles(){
    return this.articles;
  }

  artById(id:number):Article{
    const article = this.articles.find(art => art.id == id);

    if( !article ) throw new Error(id + " n'existe pas comme identifiant");

    return article;
  }
}
