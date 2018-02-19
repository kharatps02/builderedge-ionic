import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StageProvider, ILocation, IStage } from '../../providers/stage-service/stage-service';
@IonicPage()
@Component({
  selector: 'page-stages',
  templateUrl: 'stages.html',
})
export class StagesPage {
  private locations: Array<ILocation>;
  private stages: Array<IStage>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private stageProvider: StageProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StagesPage');
    this.locations = this.stageProvider.getLocations();
    this.stages = this.stageProvider.getStagesByLocationId(this.locations[0].id);
  }

}
