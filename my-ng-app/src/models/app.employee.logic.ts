import { Employee } from './app.employee.model';
export class EmployeeLogic {
  private employees: Array<Employee>;

  constructor() {
    this.employees = new Array<Employee>();
    this.employees.push(new Employee(1, 'Aditya', 25000));
    this.employees.push(new Employee(2, 'Akash', 23000));
  }

  getEmployees(): Array<Employee> {
    return this.employees;
  }

  addEmployee(emp: Employee): Array<Employee> {
    this.employees.push(emp);
    return this.employees;
  }
}
