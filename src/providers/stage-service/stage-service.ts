import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StageServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StageServiceProvider Provider');
  }

}
