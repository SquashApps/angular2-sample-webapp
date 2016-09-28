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
var router_2 = require('@angular/router');
var deleteDetailsComponent = (function () {
    function deleteDetailsComponent(employeeService, router, route) {
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
    }
    deleteDetailsComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.employeeService.getList().then(function (employees) { return _this.employees = employees; });
    };
    deleteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeeList();
        this.route.params.forEach(function (params) {
            _this.deleteId = parseInt(params['id']);
        });
    };
    deleteDetailsComponent.prototype.deleteEmployee = function () {
        var _this = this;
        var midx = -1;
        mock_data_1.employees.forEach(function (emp, idx) {
            if (emp.employee_id === _this.deleteId) {
                midx = idx;
            }
        });
        mock_data_1.employees.splice(midx, 1);
        this.goToHome();
    };
    deleteDetailsComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], deleteDetailsComponent.prototype, "employees", void 0);
    deleteDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/deleteDetails.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router, router_2.ActivatedRoute])
    ], deleteDetailsComponent);
    return deleteDetailsComponent;
}());
exports.deleteDetailsComponent = deleteDetailsComponent;
//# sourceMappingURL=deleteDetails.component.js.map