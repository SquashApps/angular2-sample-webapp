import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { EmployeeService } from '../../app/employee.service';
import { employeeProperty } from '../../app/employee';
@Component({
    templateUrl: 'editModalPage.html'
})
export class EditModalPage {
    employees: employeeProperty[];
    errorMessage: string;
    selectedEmployee: employeeProperty;
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
        for (let employee of this.employees) {
            if (employee.employee_id === parseInt(xId)) {
                this.selectedEmployee = employee;
            }
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}