import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { employeeProperty } from './employee';
import { employees } from './mock-data';
import { Router } from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: 'app/employeeList.component.html'
})
export class employeeListComponent implements OnInit {
    @Input()
    employees: employeeProperty[];
    skip=0;
    limit=10;
    displayData:employeeProperty[];
    hide_loadMore=false;
    errorMessage:string;
    constructor(private employeeService: EmployeeService,private router:Router) {
        this.displayData=[];
    }
    getEmployeeList(): void {
        this.employeeService.getList().then(employees =>this.employees = employees,
        error=> this.errorMessage = <any>error)
        this.loadMore();
    }
    ngOnInit(): void {
        this.getEmployeeList();
    }
    showAddModal(){
        this.router.navigate(['/add']);
    }
    showEditModal(employee:employeeProperty){
        this.router.navigate(['/edit',employee]);
    }
    showDeleteModal(employee:employeeProperty){
        this.router.navigate(['/delete',employee]);
    }
    skipValue(){
        this.skip+=10;
        this.limit+=10;
    }
    loadMore(){
         let length=employees.length;
         for(let i=this.skip;i < this.limit;i++){
            this.displayData.push(employees[i]);
         }
        this.skipValue();
        if(length === this.skip){
            this.hide_loadMore=true;
        }
    }
}
