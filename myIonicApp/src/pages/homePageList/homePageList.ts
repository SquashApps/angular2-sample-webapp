import { Component } from '@angular/core';
import { NavController,AlertController,ModalController } from 'ionic-angular';
import { EmployeeService } from '../../app/employee.service';
import { employeeProperty } from '../../app/employee';
import {EditModalPage} from '../editPage/editModalPage';
import {detailsModalPage} from '../detailsPage/detailsModalPage';
@Component({
  templateUrl: 'homePageList.html'
})
export class homePageList {
  employees: employeeProperty[];
  displayData: employeeProperty[] = [];
  skip=0;
  limit=10;
  show_loadingText=true;
  errorMessage:string;
  constructor(public navCtrl: NavController, 
  private employeeService: EmployeeService,
  public alerCtrl: AlertController,
  public modalCtrl: ModalController) {
  }
  getEmployeeList(): void {
    this.employeeService.getList().then(employees => {
      this.employees = employees
      for (var i =0; i < 10; i++) {
        this.displayData.push(this.employees[i]);
      }
    },
    error => { this.errorMessage = <any>error; console.log('error', error); });

  }
  ngOnInit() {
    this.getEmployeeList();
  }
  skipValue(){
        this.skip+=10;
        this.limit+=10;
  }
  loadMore(infiniteScroll) {
   
setTimeout(() => {
    this.skipValue();
   if(this.displayData.length===100){
      this.show_loadingText=false;
      return;
    }
    else{
      for (let i = this.skip; i <this.limit; i++) {
        this.displayData.push(this.employees[i]);
      }
      infiniteScroll.complete();
    }
    }, 500);
    
  }
  deleteEmployee(deleteId:number) {
    let confirm = this.alerCtrl.create({
      title: 'Do you want to delete this employee details?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
           this.displayData.forEach((emp, idx) => {
            if (emp.employee_id === deleteId) {
                this.displayData.splice(idx, 1);
            }
        });
        }
        }
      ]
    });
    confirm.present()
  }
  openDetailsModal(employee_id) {
    let detailsModal = this.modalCtrl.create(detailsModalPage,employee_id);
    detailsModal.present();
  }
  openEditModal(employee_id) {
    let editModal = this.modalCtrl.create(EditModalPage,employee_id);
    editModal.present();
  }
}

