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
  private static Employees: Array<Employee>;
  private static depts: Array<string>;
  private static desig: Array<string>;

  constructor() {
    EmployeeOp.Employees = new Array<Employee>();
    EmployeeOp.Employees.push(new Employee(101, "A", 1200, "Manager", "IT"));
    EmployeeOp.Employees.push(new Employee(102, "B", 1300, "Lead", "SL"));

    EmployeeOp.depts = new Array<string>();
    EmployeeOp.depts.push("IT");
    EmployeeOp.depts.push("HR");
    EmployeeOp.depts.push("SL");
    EmployeeOp.depts.push("DS");

    EmployeeOp.desig = new Array<string>();
    EmployeeOp.desig.push("Manager");
    EmployeeOp.desig.push("Lead");
    EmployeeOp.desig.push("Staff");
    EmployeeOp.desig.push("SSE");
  }

  private static isEmployeePresent(id: number): boolean {
    return EmployeeOp.Employees.filter((e) => e.EmpNo === id).length > 0;
  }

  private static isEmpNameValid(name: string): boolean {
    return (
      !/\d/.test(name) && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name)
    );
  }

  private static validateData(emp: Employee): boolean {
    // Validation Rules
    // 1. EmpNo MUST be unique
    // 2. EmpNAme MUST not have number or Special Characters
    // 3. DeptName and Designation names MUST be from the array of depts and desig
    // 4. Salary Must be Positive integer

    if (
      !this.isEmployeePresent(emp.EmpNo) &&
      this.isEmpNameValid(emp.EmpName) &&
      EmployeeOp.depts.indexOf(emp.DeptName) !== -1 &&
      EmployeeOp.desig.indexOf(emp.Designation) !== -1 &&
      emp.Salary > 0
    )
      return true;

    return false;
  }

  static addEmployee(emp: Employee): Array<Employee> {
    // Call to validateData(), if it is true then push record in array
    // Logic to add employee in Employees Array
    if (this.validateData(emp)) {
      EmployeeOp.Employees.push(emp);
      console.log("New employee has been added successfully.");
      return EmployeeOp.Employees;
    }
    console.log("An error occured while adding an employee.");
  }

  static updateEmployee(emp: Employee): Array<Employee> {
    // Call to validateData(), if it is true then push record in array
    // search Employee from array if found update it
    // Logic to add employee in Employees Array
    if (this.validateData(emp)) EmployeeOp.Employees.push(emp);
    return EmployeeOp.Employees;
  }

  static deleteEmployee(emp: Employee): Array<Employee> {
    // search Employee from array if found delete it
    // Logic to add employee in Employees Array
    if (EmployeeOp.isEmployeePresent(emp.EmpNo)) {
      let remainingEmployees = EmployeeOp.Employees.filter(
        (e) => e.EmpNo !== emp.EmpNo
      );
      EmployeeOp.Employees = [...remainingEmployees];
      console.log("Employee has been deleted successfully.");
      return EmployeeOp.Employees;
    }
    console.log("Employee with the given details doesn't exist.");
  }

  static getAllEmployees(criteria: string): Array<Employee> {
    // criteria could by DeptName, Designation
    let filteredEmployees = EmployeeOp.Employees.filter(
      (e) => e.DeptName === criteria || e.Designation === criteria
    );
    EmployeeOp.Employees = [...filteredEmployees];
    return EmployeeOp.Employees;
  }
}

new EmployeeOp();

let new_emp = new Employee(103, "Aditya", 100000, "SSE", "DS");
EmployeeOp.addEmployee(new_emp);

console.log(
  "==================================================================="
);
console.log("Printing the list of employees: ");
EmployeeOp.getAllEmployees("DS").forEach((emp) => {
  console.log(`Employee ID: ${emp.EmpNo}`);
  console.log(`Employee Name: ${emp.EmpName}`);
  console.log(`Employee Salary: ${emp.Salary}`);
  console.log(`Employee Dept: ${emp.DeptName}`);
  console.log(`Employee Designation: ${emp.Designation}\n`);
});
console.log(
  "==================================================================="
);

EmployeeOp.deleteEmployee(new Employee(104, "Aditya", 100000, "SSE", "DS"));
