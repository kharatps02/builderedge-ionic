import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-defects',
  templateUrl: 'defects.html',
})
export class DefectsPage {
  private defects: Array<any>;
  private selectedDefectId: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefectsPage');
    this.init();
  }

  init() {
    this.defects = [
      {
        id: 'd1', name: 'Water leak in kitchen think 1',
        description: 'Water leak in kitchen think',
        zone: 'Kitchen',
        subcontractor: 'PlumerBER LTD',
        due_date: '2/3/3028',
        stage_name: 'First Stage',
        inpsection_line_item: 'Inspector form',
        found_by: 'John',
        fix_on_stage: 'Last',
        by_sunc: 'PlumberBER PVT LTD',
        fix_by: 'Jhon'
      },
      { id: 'd2', name: 'Water leak in kitchen think 2' },
      { id: 'd3', name: 'Water leak in kitchen think 3' },
      { id: 'd4', name: 'Water leak in kitchen think 3' }
    ];
    this.selectedDefectId = this.defects[0].id;
  }

  onDefectsChange() {

  }

}
