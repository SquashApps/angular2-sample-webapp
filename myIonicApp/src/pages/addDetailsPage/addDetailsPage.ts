import { Component} from '@angular/core';

import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { EmployeeService } from '../../app/employee.service';
import { employeeProperty } from '../../app/employee';

@Component({
  templateUrl: 'addDetailsPage.html'
})
export class addDetailsPage {
  employees: employeeProperty[];
  newEmployee: employeeProperty;
  emp_gender="Male";
  errorMessage:string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private employeeService: EmployeeService,
    public viewCtrl: ViewController,
    public alerCtrl: AlertController) {

  }
  getEmployeeList(): void {
    this.employeeService.getList().then(employees => this.employees = employees,
    error => { this.errorMessage = <any>error; console.log('error', error); });
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
  addEmployeeDetails(empData) {
    empData.employee_id = Math.floor(Math.random() * 1000000000);
    empData.gender = this.emp_gender;
    this.employees.unshift(empData);
    this.confirm();
  }
  confirm() {
    let alert = this.alerCtrl.create({
      title: 'Employee Added!',
      subTitle: 'Visit Home Page to view the details!',
      buttons: ['OK']
    });
    alert.present(); 
  }
}
