import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StagesPage } from './stages';
import { StageProvider } from '../../providers/stage-service/stage-service';
@NgModule({
  declarations: [
    StagesPage,
  ],
  imports: [
    IonicPageModule.forChild(StagesPage),
  ],
  providers: [StageProvider]
})
export class StagesPageModule { }
