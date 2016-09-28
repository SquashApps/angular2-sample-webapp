import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { employeeProperty } from './employee';
import { employees } from './mock-data';
import { Router } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/addDetails.component.html'
})
export class addDetailsComponent implements OnInit {
    @Input()
    employees: employeeProperty[];
    addEmp:boolean;
    addEmployee:employeeProperty;
    types=['','Male','Female'];
    emp_gender:string;
    constructor(private employeeService: EmployeeService,private router:Router) {
    }

    getEmployeeList(): void {
        this.employeeService.getList().then(employees => this.employees = employees);
    }
    ngOnInit(): void {
        this.getEmployeeList();
    }
    addEmployeeDetails(empData:employeeProperty){
       empData.employee_id=Math.floor(Math.random()*1000000000); 
            empData.gender=this.emp_gender;
            console.log('Employee Details',empData);
            this.employees.unshift(empData);
            (<any>$( ".btn-info" )).trigger( "click" );
            this.goToHome();
    }
    setGender(gender:string){
        this.emp_gender=gender;
    }
    goToHome(){
        this.router.navigate(['/']);
    }
}
