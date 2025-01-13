import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports: [IonicModule]
})
export class ArticleComponent  implements OnInit {

  libelle!:string;
  prix!:number;

  like:number = 0;

  //origine?:string;

  constructor() {
    this.libelle = "PC";
    this.prix = 1500;
   }

  ngOnInit() {}

  onLike(){
    this.like++;
  }

}
