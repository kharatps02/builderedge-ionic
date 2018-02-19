import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'StagesPage';
  tab2Root = 'DefectsPage';
  tab3Root = 'InspectionsPage';
  tab4Root = 'IssuesPage';
  tab5Root = 'FilesPage';

  constructor() {

  }
}
