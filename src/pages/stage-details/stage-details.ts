import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stage-details',
  templateUrl: 'stage-details.html',
})
export class StageDetailsPage {
  private expandCol: string = 'beforeStart';
  private subcontractors: Array<{ id: string, name: string }>;
  private selectedSubcontractorId: string;
  private dummyItems: Array<{ id: string, name: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StageDetailsPage');
    this.init();
  }
  init() {
    this.subcontractors = [
      { id: 'c1', name: 'Robert	Thomson' },
      { id: 'c2', name: 'Kevin	May' },
      { id: 'c3', name: 'Joseph	Thomson' },
      { id: 'c4', name: 'Jacob	Bell' }];
    this.selectedSubcontractorId = this.subcontractors[0].id;
    this.dummyItems = [{
      id: 'i1',
      name: 'Leakage in Kitchen'
    }, {
      id: 'i2',
      name: 'Lights not working'
    }, {
      id: 'i1',
      name: 'Security Inspection'
    }];
  }
  expandCollapse(workstage) {
    this.expandCol = workstage;
  }
}
