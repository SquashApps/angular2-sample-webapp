import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {ModalModule} from "ng2-modal";
import { AppComponent }  from './app.component';
import { employeeListComponent }  from './employeeList.component';
import { addDetailsComponent }  from './addDetails.component';
import { editDetailsComponent }  from './editDetails.component';
import { deleteDetailsComponent }  from './deleteDetails.component';
import { EmployeeService }  from './employee.service';
import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule,FormsModule,ModalModule,routing],
  declarations: [AppComponent,employeeListComponent,addDetailsComponent,editDetailsComponent,deleteDetailsComponent],
  providers: [
    EmployeeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
