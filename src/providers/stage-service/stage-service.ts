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
      start_date: '2/3/2018',
      end_date: '2/3/2018',
      status: 'Late Start',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l1'
    },
    {
      id: 'l1-s2',
      name: 'Plumbing Rough Loern',
      start_date: '12/3/2018',
      end_date: '19/3/2018',
      status: 'In Progress',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l1'
    },
    {
      id: 'l1-s3',
      name: 'Plumbing Rough Loern2',
      start_date: '12/3/2018',
      end_date: '12/3/2018',
      status: 'Done',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l1'
    },
    {
      id: 'l2-s1',
      name: 'Plumbing Rough',
      start_date: '2/3/2018',
      end_date: '2/3/2018',
      status: 'Late Start',
      sub_contractor: 'Robert Plumbing LTD',
      location_ref_id: 'l2'
    },
    {
      id: 'l2-s2',
      name: 'Plumbing Rough Loern',
      start_date: '12/3/2018',
      end_date: '19/3/2018',
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