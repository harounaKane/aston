import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Article } from '../model/Article';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  imports: [IonicModule, DatePipe, CommonModule]
})
export class ArticleDetailComponent  implements OnInit {

  article!:Article;

  constructor(private artSers:ArticleServiceService, private router:ActivatedRoute) {
    const id = this.router.snapshot.params['id'];

    this.article = this.artSers.artById(id);
   }

  ngOnInit() {
    console.log("ngoninit");
    
  }

}
