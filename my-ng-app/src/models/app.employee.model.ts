export class Employee {
  [x: string]: any;
  constructor(
    public EmpId: number,
    public EmpName: string,
    public EmpSalary: number
  ) {}
}
