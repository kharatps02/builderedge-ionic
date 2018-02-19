import { Component } from '@angular/core';

import { StagePage } from '../stage/stage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = StagePage;
  tab2Root = StagePage;
  tab3Root = StagePage;
  tab4Root = StagePage;
  tab5Root = StagePage;

  constructor() {

  }
}
