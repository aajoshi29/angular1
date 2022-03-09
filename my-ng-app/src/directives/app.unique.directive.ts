import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { EmployeeLogic } from 'src/models/app.employee.logic';
import { Employee } from 'src/models/app.employee.model';

@Directive({
  selector: '[checkUnique]',
})
export class CheckUniqueDirective {
  @Input('checkUnique')
  checkUnique: string;
  employees: Array<Employee>;
  emplogic: EmployeeLogic;

  constructor(private renderer: Renderer2, private ele: ElementRef) {
    this.checkUnique = '';
    this.emplogic = new EmployeeLogic();
    this.employees = new Array<Employee>();
    this.employees = this.emplogic.getEmployees();
  }

  @HostListener('change')
  onChangeInput() {
    let color = '';
    if (
      this.employees.filter(
        (employee) => employee.EmpId === Number(this.checkUnique)
      ).length > 0
    )
      color = 'red';
    this.renderer.setStyle(this.ele.nativeElement, 'borderColor', color);
  }
}
