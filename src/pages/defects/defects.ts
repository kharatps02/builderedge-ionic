import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StageProvider } from '../../providers/stage-service/stage-service';
@IonicPage()
@Component({
  selector: "page-defects",
  templateUrl: "defects.html",
})
export class DefectsPage {
  private defects: Array<any>;
  private selectedDefect: any;
  private readonlyField: {
    description: boolean,
    subcontractor: boolean,
    by_sunc: boolean
  }
  constructor(public navCtrl: NavController, private stageProvider: StageProvider) {
    this.init();    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DefectsPage");
  }

  init() {
    this.readonlyField = {
      description: true,
      subcontractor: true,
      by_sunc: true
    };
    this.selectedDefect = {
      id: "",
      name: "",
      description: "",
      zone: "",
      subcontractor: "",
      due_date: new Date(),
      stage_name: "",
      inpsection_line_item: "",
      found_by: "",
      fix_on_stage: "",
      by_sunc: "",
      fix_by: "",
      images: [],
      remark: ""
    }

    this.defects = this.stageProvider.getDefectList();
    this.selectedDefect = this.defects[0];
  }

  onDefectsChange() {

  }

}
