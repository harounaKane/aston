import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Article } from '../model/Article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonicModule, RouterLink]
})
export class ArticleComponent {

  likeText:string = '👍';

  @Input() article!:Article;

  constructor() {
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
