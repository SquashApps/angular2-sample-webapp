import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { employeeProperty } from './employee';
import { employees } from './mock-data';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/deleteDetails.component.html'
})
export class deleteDetailsComponent implements OnInit {
    @Input()
    employees: employeeProperty[];
    deleteId:number;
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
        this.deleteId=parseInt(params['id']);
       });
    }
    deleteEmployee() {
        var midx = -1;
        employees.forEach((emp, idx) => {
            if (emp.employee_id === this.deleteId) {
                midx = idx;
            }
        });
        employees.splice(midx, 1);
        this.goToHome();
    }
    goToHome(){
        this.router.navigate(['/']);
    }
}
