"use strict";
var router_1 = require('@angular/router');
var employeeList_component_1 = require('./employeeList.component');
var addDetails_component_1 = require('./addDetails.component');
var editDetails_component_1 = require('./editDetails.component');
var deleteDetails_component_1 = require('./deleteDetails.component');
var appRoutes = [
    {
        path: 'employeeList',
        component: employeeList_component_1.employeeListComponent
    },
    {
        path: '',
        redirectTo: '/employeeList',
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: addDetails_component_1.addDetailsComponent
    },
    {
        path: 'edit/:id',
        component: editDetails_component_1.editDetailsComponent
    },
    {
        path: 'delete/:id',
        component: deleteDetails_component_1.deleteDetailsComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map