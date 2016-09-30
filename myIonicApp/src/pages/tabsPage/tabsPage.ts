import { Component } from '@angular/core';
import { HomePageGrid } from '../homePageGrid/homePageGrid';
import { HomePageList } from '../homePageList/homePageList';

@Component({
  templateUrl: 'tabsPage.html'
})
export class TabsPage {
  //assign root for ion-tab
    tab1Root = HomePageGrid;
    tab2Root = HomePageList;
}

