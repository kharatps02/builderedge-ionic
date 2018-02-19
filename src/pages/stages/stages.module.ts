import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StagesPage } from './stages';

@NgModule({
  declarations: [
    StagesPage,
  ],
  imports: [
    IonicPageModule.forChild(StagesPage),
  ],
})
export class StagesPageModule {}
