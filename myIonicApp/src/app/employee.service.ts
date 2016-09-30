import { Injectable } from '@angular/core';
import { EmployeeProperty } from './employee';
import { Employees } from './mock-data';
@Injectable()
export class EmployeeService {
  getList(): Promise<EmployeeProperty[]> {
    //returns all data from mock data.js
    return Promise.resolve(Employees);
  }
  getEmployee(id: number): Promise<EmployeeProperty> {
    //stores all the data into employees varibale and returns it 
  return this.getList()
             .then(employees => employees.find(employees => employees.employee_id === id));
}

}