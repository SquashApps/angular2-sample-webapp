import { Injectable } from '@angular/core';
import { employeeProperty } from './employee';
import { employees } from './mock-data';
@Injectable()
export class EmployeeService {
  getList(): Promise<employeeProperty[]> {
    return Promise.resolve(employees);
  }
  getEmployee(id: number): Promise<employeeProperty> {
  return this.getList()
             .then(employees => employees.find(employees => employees.employee_id === id));
}

}