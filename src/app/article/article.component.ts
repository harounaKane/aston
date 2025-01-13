import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Article } from '../model/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonicModule]
})
export class ArticleComponent {

  article!:Article;

  likeText:string = '👍';

  constructor() {
    this.article = new Article( 15, "PC", 1500, 0);
  }

  onLike(){
    if( this.article.like >= 1 ){
      this.article.like--; 
      this.likeText = "👍"
    }
    else{
      this.article.like++;
      this.likeText = "👎"
    }
  }

}
