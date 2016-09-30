import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { homePageGrid } from '../pages/homePageGrid/homePageGrid';
import { homePageList  } from '../pages/homePageList/homePageList';
import { tabsPage } from '../pages/tabsPage/tabsPage';
import {addDetailsPage} from '../pages/addDetailsPage/addDetailsPage';
import {EditModalPage} from '../pages/editPage/editModalPage';
import {detailsModalPage} from '../pages/detailsPage/detailsModalPage';
import {EmployeeService} from './employee.service';
@NgModule({
  declarations: [
    MyApp,
    homePageGrid,
    addDetailsPage,
    EditModalPage,
    tabsPage,
    homePageList ,
    detailsModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    MyApp,
    homePageGrid,
    addDetailsPage,
    EditModalPage,
    tabsPage,
    homePageList ,
    detailsModalPage
  ],
  providers: [EmployeeService]
})
export class AppModule {}
