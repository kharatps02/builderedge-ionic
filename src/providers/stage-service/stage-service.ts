import { Injectable } from '@angular/core';


@Injectable()
export class StageProvider {

  constructor() {
    console.log('Hello StageServiceProvider Provider');
  }

  getLocations(): Array<ILocation> {
    let locations: Array<ILocation>;
    locations = [{ id: 'l1', name: 'Building 20A' }, { id: 'l2', name: 'Building 20B' }];
    return locations;
  }

  getStagesByLocationId(locationId: string): Array<IStage> {
    let stages = [{
      id: 'l1-s1',
      name: 'Plumbing Rough',
      start_date: '21/2/2018',
      end_date: '21/2/2018',
      status: 'Late Start',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l1'
    },
    {
      id: 'l1-s2',
      name: 'Electrical Work',
      start_date: '21/2/2018',
      end_date: '26/2/2018',
      status: 'In Progress',
      sub_contractor: 'Mit Electrical Pvt Ltd',
      location_ref_id: 'l1'
    },
    {
      id: 'l1-s3',
      name: 'Furnishing',
      start_date: '12/2/2018',
      end_date: '18/2/2018',
      status: 'Done',
      sub_contractor: 'Senco Furnishing',
      location_ref_id: 'l1'
    },
    {
      id: 'l2-s1',
      name: 'Flooring',
      start_date: '17/2/2018',
      end_date: '21/2/2018',
      status: 'Late Start',
      sub_contractor: 'Kajaria Ltd',
      location_ref_id: 'l2'
    },
    {
      id: 'l2-s2',
      name: 'Security Audit',
      start_date: '12/2/2018',
      end_date: '22/2/2018',
      status: 'In Progress',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l2'
    }];

    stages = stages.filter((self) => {
      if (self.location_ref_id === locationId) {
        return true;
      }
    });

    return stages || [];
  }

  getDefectList() {
    let defects = [
      {
        id: "d1",
        name: "Water leak in kitchen think 1",
        description: "Water leak in kitchen think",
        zone: "Kitchen",
        subcontractor: "PlumerBER LTD",
        due_date: "02/03/2018",
        stage_name: "First Stage",
        inpsection_line_item: "Inspector form",
        found_by: "John",
        fix_on_stage: "Last",
        by_sunc: "PlumberBER PVT LTD",
        fix_by: "Jhon",
        images: ["../../assets/imgs/image1.jpg",
          "../../assets/imgs/image2.jpg",
          "../../assets/imgs/image3.jpg",
          "../../assets/imgs/image4.jpg"],
        remark: ""
      },{
        id: "d2",
        name: "Lights in the lift not working",
        description: "Lights in the lift not working",
        zone: "Common Area",
        subcontractor: "PlumerBER LTD",
        due_date: "21/02/2018",
        stage_name: "Last Stage",
        inpsection_line_item: "Inspector form",
        found_by: "Rob",
        fix_on_stage: "Last",
        by_sunc: "Cone Lift works",
        fix_by: "Rob",
        images: ["../../assets/imgs/lift4.jpg",
          "../../assets/imgs/image2.jpg",
          "../../assets/imgs/image3.jpg",
          "../../assets/imgs/image4.jpg"],
        remark: ""
      },{
        id: "d3",
        name: "Security Camera not working",
        description: "Security Camera not working",
        zone: "Entry",
        subcontractor: "ABC Securities LTD",
        due_date: "25/02/2018",
        stage_name: "First Stage",
        inpsection_line_item: "Inspector form",
        found_by: "Bob",
        fix_on_stage: "Last",
        by_sunc: "ABC Securities",
        fix_by: "Jhon",
        images: ["../../assets/imgs/image1.jpg",
          "../../assets/imgs/image2.jpg",
          "../../assets/imgs/image3.jpg",
          "../../assets/imgs/image4.jpg"],
        remark: ""
      }
    ];

    return defects;
  }
}


export interface ILocation {
  id: string;
  name: string;
}

export interface IStage {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  status: string;
  sub_contractor: string;
  location_ref_id: string;
}