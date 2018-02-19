import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StagesPageModule } from '../pages/stages/stages.module';
import { DefectsPageModule } from '../pages/defects/defects.module';
import { InspectionsPageModule } from '../pages/inspections/inspections.module';
import { IssuesPageModule } from '../pages/issues/issues.module';
import { FilesPageModule } from '../pages/files/files.module';
import { StageServiceProvider } from '../providers/stage-service/stage-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StagesPageModule,
    DefectsPageModule,
    InspectionsPageModule,
    FilesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StageServiceProvider
  ]
})
export class AppModule { }
