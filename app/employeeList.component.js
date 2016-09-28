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
var mock_data_1 = require('./mock-data');
var router_1 = require('@angular/router');
var employeeListComponent = (function () {
    function employeeListComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.skip = 0;
        this.limit = 10;
        this.hide_loadMore = false;
        this.displayData = [];
    }
    employeeListComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.employeeService.getList().then(function (employees) { return _this.employees = employees; });
        this.loadMore();
    };
    employeeListComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    };
    employeeListComponent.prototype.showAddModal = function () {
        this.router.navigate(['/add']);
    };
    employeeListComponent.prototype.showEditModal = function (employee) {
        this.router.navigate(['/edit', employee]);
    };
    employeeListComponent.prototype.showDeleteModal = function (employee) {
        this.router.navigate(['/delete', employee]);
    };
    employeeListComponent.prototype.skipValue = function () {
        this.skip += 10;
        this.limit += 10;
    };
    employeeListComponent.prototype.loadMore = function () {
        var length = mock_data_1.employees.length;
        for (var i = this.skip; i < this.limit; i++) {
            this.displayData.push(mock_data_1.employees[i]);
        }
        this.skipValue();
        if (length === this.skip) {
            this.hide_loadMore = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], employeeListComponent.prototype, "employees", void 0);
    employeeListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/employeeList.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], employeeListComponent);
    return employeeListComponent;
}());
exports.employeeListComponent = employeeListComponent;
//# sourceMappingURL=employeeList.component.js.map