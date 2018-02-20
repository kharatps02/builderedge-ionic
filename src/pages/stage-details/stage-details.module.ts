import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StageDetailsPage } from './stage-details';

@NgModule({
  declarations: [
    StageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StageDetailsPage),
  ],
})
export class StageDetailsPageModule {}
