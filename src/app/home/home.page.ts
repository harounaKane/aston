import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  prenom:string = "";

  person: any = {
    'nom': "Tata",
    "url": "assets/ionic.jpg"
  }

  articles: any = ["pc", "clavier", "écran"];

  constructor() {}

  onChange(){
    this.person.nom = this.prenom;   
    this.prenom = ""; 
  }
}
