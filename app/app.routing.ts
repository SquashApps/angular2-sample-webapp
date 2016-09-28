import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { employeeListComponent }  from './employeeList.component';
import { addDetailsComponent }      from './addDetails.component';
import { editDetailsComponent } from './editDetails.component';
import { deleteDetailsComponent } from './deleteDetails.component';

const appRoutes: Routes = [
  {
    path: 'employeeList',
    component: employeeListComponent
  },
  {
  	 path: '',
  	 redirectTo: '/employeeList',
  	 pathMatch: 'full'
  },
  {
    path: 'add',
    component: addDetailsComponent
  },
  {
  path: 'edit/:id',
  component: editDetailsComponent
},
{
  path: 'delete/:id',
  component: deleteDetailsComponent
},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);