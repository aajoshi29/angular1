class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public Salary: number,
    public Designation: string,
    public DeptName: string
  ) {}
}

class EmployeeOp {
  private Employees: Array<Employee>;
  private depts: Array<string>;
  private desig: Array<string>;

  constructor() {
    this.Employees = new Array<Employee>();
    this.Employees.push(new Employee(101, "A", 1200, "Manager", "IT"));
    this.Employees.push(new Employee(102, "B", 1300, "Lead", "SL"));

    this.depts = new Array<string>();
    this.depts.push("IT");
    this.depts.push("HR");
    this.depts.push("SL");

    this.desig = new Array<string>();
    this.desig.push("Manager");
    this.desig.push("Lead");
    this.desig.push("Staff");
  }

  private isEmployeePresent(id: number): boolean {
    return this.Employees.filter((e) => e.EmpNo === id).length > 0;
  }

  private isEmpNameValid(name: string): boolean {
    return (
      !/\d/.test(name) && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name)
    );
  }

  private validateData(emp: Employee): boolean {
    // Validation Rules
    // 1. EmpNo MUST be unique
    // 2. EmpNAme MUST not have number or Special Characters
    // 3. DeptName and Designation names MUST be from the array of depts and desig
    // 4. Salary Must be Positive integer

    if (
      !this.isEmployeePresent(emp.EmpNo) &&
      this.isEmpNameValid &&
      //   this.depts.includes(emp.DeptName) &&
      //   this.desig.includes(emp.Designation) &&
      emp.Salary > 0
    )
      return true;

    return false;
  }

  addEmployee(emp: Employee): Array<Employee> {
    // Call to validateData(), if it is true then push record in array
    // Logic to add employee in Employees Array
    if (this.validateData(emp)) this.Employees.push(emp);
    return this.Employees;
  }

  updateEmployee(emp: Employee): Array<Employee> {
    // Call to validateData(), if it is true then push record in array
    // search Employee from array if found update it
    // Logic to add employee in Employees Array
    if (this.validateData(emp)) this.Employees.push(emp);
    return this.Employees;
  }

  deleteEmployee(emp: Employee): Array<Employee> {
    // search Employee from array if found delete it
    // Logic to add employee in Employees Array
    let remainingEmployees = this.Employees.filter(
      (e) => e.EmpNo !== emp.EmpNo
    );
    this.Employees = [...remainingEmployees];
    return this.Employees;
  }

  getAllEmployees(criteria: string): Array<Employee> {
    // criteria could by DeptName, Designation
    let filteredEmployees = this.Employees.filter(
      (e) => e.DeptName === criteria || e.Designation === criteria
    );
    this.Employees = [...filteredEmployees];
    return this.Employees;
  }
}
