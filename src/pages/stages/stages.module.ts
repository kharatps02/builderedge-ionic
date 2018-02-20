import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StagesPage } from './stages';
import { StageDetailsPageModule } from '../stage-details/stage-details.module';
import { StageProvider } from '../../providers/stage-service/stage-service';
@NgModule({
  declarations: [
    StagesPage,
  ],
  imports: [
    IonicPageModule.forChild(StagesPage),
    StageDetailsPageModule
  ],
  providers: [StageProvider]
})
export class StagesPageModule { }
