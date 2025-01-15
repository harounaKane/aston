import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  imports: [IonicModule]
})
export class PageComponent  implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  onClick() { console.log("too");
   this.menuCtrl.toggle(); }

  ngOnInit() {}

}
