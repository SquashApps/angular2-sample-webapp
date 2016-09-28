import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'Employee List:';
}