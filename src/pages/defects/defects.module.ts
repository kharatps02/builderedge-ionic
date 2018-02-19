import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DefectsPage } from './defects';

@NgModule({
  declarations: [
    DefectsPage,
  ],
  imports: [
    IonicPageModule.forChild(DefectsPage),
  ],
})
export class DefectsPageModule {}
