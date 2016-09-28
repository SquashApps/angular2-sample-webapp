"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var router_1 = require('@angular/router');
var addDetailsComponent = (function () {
    function addDetailsComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.types = ['', 'Male', 'Female'];
    }
    addDetailsComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.employeeService.getList().then(function (employees) { return _this.employees = employees; });
    };
    addDetailsComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    };
    addDetailsComponent.prototype.addEmployeeDetails = function (empData) {
        empData.employee_id = Math.floor(Math.random() * 1000000000);
        empData.gender = this.emp_gender;
        console.log('Employee Details', empData);
        this.employees.unshift(empData);
        $(".btn-info").trigger("click");
        this.goToHome();
    };
    addDetailsComponent.prototype.setGender = function (gender) {
        this.emp_gender = gender;
    };
    addDetailsComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], addDetailsComponent.prototype, "employees", void 0);
    addDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/addDetails.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], addDetailsComponent);
    return addDetailsComponent;
}());
exports.addDetailsComponent = addDetailsComponent;
//# sourceMappingURL=addDetails.component.js.map