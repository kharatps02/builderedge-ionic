import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StageProvider, ILocation, IStage } from '../../providers/stage-service/stage-service';

@IonicPage()
@Component({
  selector: 'page-inspections',
  templateUrl: 'inspections.html',
})
export class InspectionsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private stageProvider: StageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsPage');
  
  }  

}
