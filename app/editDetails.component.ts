import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { employeeProperty } from './employee';
import { employees } from './mock-data';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/editDetails.component.html'
})
export class editDetailsComponent implements OnInit {
    @Input()
    employees: employeeProperty[];
    selectedEmployee: employeeProperty;
    employeeSelected: boolean;
    emp_gender:string;
    types=['Male','Female'];
    errorMessage:string;
    constructor(private employeeService: EmployeeService,private router:Router,private route:ActivatedRoute) {
    }

    getEmployeeList(): void {
        this.employeeService.getList().then(employees => this.employees = employees,
        error=> this.errorMessage = <any>error);
    }
    ngOnInit(): void {
        this.getEmployeeList();
       this.route.params.forEach((params: Params) => {
         this.findEmployee(parseInt(params['id']));
       });
        
    }
    findEmployee(xId:number) {
        for (let employee of employees) {
            if (employee.employee_id ===xId) {
                this.selectedEmployee = employee;
            }
        }
    }
    goToHome(){
         this.router.navigate(['/']);
    }
}
