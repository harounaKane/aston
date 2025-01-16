import { Categorie } from './../model/Categorie';
import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles:Article[] = [
    new Article(10, "PC", 950, new Categorie(1, "Electronique"), "Description sur le PC"),
    new Article(12, "Clavier", 50, new Categorie(5, "Informatique"), "Description du clavier ...", new Date, 1),
    new Article(17, "Ecran", 350, new Categorie(2, "Sport"), "Description de l'écran ...").setOrigine("China")
  ];

  public categories:Categorie[] = [
    new Categorie(1, "Informatique"),
    new Categorie(2, "Electronique"),
    new Categorie(3, "Voyage")
  ]

  constructor() { this.saveCategorie() 
  }

  saveArticle(){
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }

  //A déplacer dans gatégorieService
  getCategories():Categorie[]{
    const ARTS = localStorage.getItem("categories")

    this.categories = ARTS ? JSON.parse(ARTS) as Categorie[] : [];

    return this.categories;
  }
  saveCategorie(){
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }

  categorieById(id:number):Categorie{
    const categorie = this.categories.find(cat => cat.id == id);

    if( !categorie ) throw new Error(id + " n'existe pas comme identifiant");

    return categorie;
  }

  //

  
  getArticles():Article[]{
    const ARTS = localStorage.getItem("articles")

    this.articles = ARTS ? JSON.parse(ARTS) as Article[] : [];

    return this.articles;
  }

  delete(artToDelete: Article){
    this.articles = this.articles.filter(artBis => artBis.id !== artToDelete.id );

    this.saveArticle();
  }

  ajouter(form: NgForm){
    
    if( form.value.id ){
      let oldArt = this.artById(form.value.id);
      oldArt.libelle = form.value.libelle;
      oldArt.prix = form.value.prix;
      oldArt.categorie = this.categorieById(form.value.categorie);

    }else{
      const id = this.articles.length ? 
                      this.articles[this.articles.length - 1].id + 1 
                      : 1;

      let cat = this.categorieById(form.value.categorie);

      let art = new Article(id, form.value.libelle, form.value.prix, cat, form.value.description, new Date, 0);
  
      this.articles.push( art );

      form.reset();
    }

    this.saveArticle();
  }

  artById(id:number):Article{
    const article = this.articles.find(art => art.id == id);

    if( !article ) throw new Error(id + " n'existe pas comme identifiant");

    return article;
  }
}
