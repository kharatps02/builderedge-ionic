import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StageProvider, ILocation, IStage } from '../../providers/stage-service/stage-service';

@IonicPage()
@Component({
  selector: 'page-inspections',
  templateUrl: 'inspections.html',
})
export class InspectionsPage {
  private expandCol: string = 'beforeStart';
  private locations: Array<ILocation>;
  private selectedLocationId: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private stageProvider: StageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionsPage');
    this.init();
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
  expandCollapse(workstage){
    this.expandCol = workstage;
  }

}
