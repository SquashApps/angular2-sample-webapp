import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePageGrid } from '../pages/homePageGrid/homePageGrid';
import { HomePageList  } from '../pages/homePageList/homePageList';
import { TabsPage } from '../pages/tabsPage/tabsPage';
import {AddDetailsPage} from '../pages/addDetailsPage/addDetailsPage';
import {EditModalPage} from '../pages/editPage/editModalPage';
import {DetailsModalPage} from '../pages/detailsPage/detailsModalPage';
import {EmployeeService} from './employee.service';
@NgModule({
  declarations: [
    MyApp,
    HomePageGrid,
    AddDetailsPage,
    EditModalPage,
    TabsPage,
    HomePageList ,
    DetailsModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    MyApp,
    HomePageGrid,
    AddDetailsPage,
    EditModalPage,
    TabsPage,
    HomePageList ,
    DetailsModalPage
  ],
  providers: [EmployeeService]
})
export class AppModule {}
