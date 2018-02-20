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
    this.subcontractors = [
      { id: 'c1', name: 'Robert	Thomson' },
      { id: 'c2', name: 'Kevin	May' },
      { id: 'c3', name: 'Joseph	Thomson' },
      { id: 'c4', name: 'Jacob	Bell' }];

    this.dummyItems = [{
      id: 'i1',
      name: 'Lorem ipsum is simply'
    }, {
      id: 'i2',
      name: 'dummy text of the'
    }, {
      id: 'i1',
      name: 'this is last item'
    }];
  }
  expandCollapse(workstage) {
    this.expandCol = workstage;
  }
}
