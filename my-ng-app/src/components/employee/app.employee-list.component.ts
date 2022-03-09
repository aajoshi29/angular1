import { Component } from '@angular/core';
import { EmployeeLogic } from 'src/models/app.employee.logic';
import { Employee } from 'src/models/app.employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './app.employee-list.html',
})
export class EmployeeListComponent {
  empNo: string;
  isUnique: boolean;
  employees: Array<Employee>;
  emplogic: EmployeeLogic;

  constructor() {
    this.empNo = '';
    this.isUnique = true;
    this.employees = new Array<Employee>();
    this.emplogic = new EmployeeLogic();
    this.employees = this.emplogic.getEmployees();
  }
}
