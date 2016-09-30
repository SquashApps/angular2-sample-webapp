import { Component } from '@angular/core';
import { homePageGrid } from '../homePageGrid/homePageGrid';
import { homePageList } from '../homePageList/homePageList';

@Component({
  templateUrl: 'tabsPage.html'
})
export class tabsPage {
    tab1Root = homePageGrid;
    tab2Root = homePageList;
}

