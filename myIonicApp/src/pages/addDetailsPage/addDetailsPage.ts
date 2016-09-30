import { Component} from '@angular/core';

import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { EmployeeService } from '../../app/employee.service';
import { EmployeeProperty } from '../../app/employee';

@Component({
  templateUrl: 'addDetailsPage.html'
})
export class AddDetailsPage {
  employees: EmployeeProperty[];
  newEmployee: EmployeeProperty;
  empGender="Male";
  errorMessage:string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private employeeService: EmployeeService,
    public viewCtrl: ViewController,
    public alerCtrl: AlertController) {

  }
  //
  getEmployeeList(): void {
    this.employeeService.getList().then(employees => this.employees = employees,
    error => { this.errorMessage = <any>error; console.log('error', error); });
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
  addEmployeeDetails(empData) {
    //generates a random number for employee_id
    empData.employee_id = Math.floor(Math.random() * 1000000000);
    //assigns the selected option value to json empData
    empData.gender = this.empGender;
    //add the json to employees array
    this.employees.unshift(empData);
    this.confirm();
  }
  confirm() {
    //opens a success alert box
    let alert = this.alerCtrl.create({
      title: 'Employee Added!',
      subTitle: 'Visit Home Page to view the details!',
      buttons: ['OK']
    });
    alert.present(); 
  }
}
