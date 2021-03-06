import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { StageProvider, ILocation, IStage } from '../../providers/stage-service/stage-service';

@IonicPage()
@Component({
  selector: 'page-stages',
  templateUrl: 'stages.html',
})
export class StagesPage {
  private locations: Array<ILocation>;
  private selectedLocationId: string;
  private stages: Array<IStage> = [];
  constructor(public navCtrl: NavController, private stageProvider: StageProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StagesPage');
    this.init();
  }

  doRefresh(refresher) {
    this.onLocationChange();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  init() {
    this.locations = this.stageProvider.getLocations();
    this.selectedLocationId = this.locations[0].id;
    this.stages = this.stageProvider.getStagesByLocationId(this.selectedLocationId);
  }

  onLocationChange() {
    this.stages = this.stageProvider.getStagesByLocationId(this.selectedLocationId);
  }

  navigateTo(toPageName, options) {
    this.navCtrl.push(toPageName, options);
  }
}
