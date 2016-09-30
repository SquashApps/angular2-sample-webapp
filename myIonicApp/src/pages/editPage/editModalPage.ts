import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { EmployeeService } from '../../app/employee.service';
import { EmployeeProperty } from '../../app/employee';
@Component({
    templateUrl: 'editModalPage.html'
})
export class EditModalPage {
    employees: EmployeeProperty[];
    errorMessage: string;
    selectedEmployee: EmployeeProperty;
    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        private employeeService: EmployeeService
    ) {
    }
    getEmployeeList(): void {
        this.employeeService.getList().then(employees => {this.employees = employees; this.findEmployee(this.params.get('employee_id'));},
            error => { this.errorMessage = <any>error; console.log('error', error); });
    }
    ngOnInit(): void {
        this.getEmployeeList();
    }
    findEmployee(xId) {
        //loops through and finds the selected employee from employees array
        for (let employee of this.employees) {
            if (employee.employee_id === parseInt(xId)) {
                this.selectedEmployee = employee;
            }
        }
    }
    dismiss() {
        //closes the modal
        this.viewCtrl.dismiss();
    }
}