import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inspections',
  templateUrl: 'inspections.html',
})
export class InspectionsPage {
  private expandCol: string = 'beforeStart';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsPage');
  }
  expandCollapse(workstage){
    this.expandCol = workstage;

  }

}
