import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [IonicModule, RouterLink]
})
export class PageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
