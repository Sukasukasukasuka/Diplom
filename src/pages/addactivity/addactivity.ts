import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-addactivity',
  templateUrl: 'addactivity.html',
})
export class AddactivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddactivityPage');
  }

}
