var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName, Salary, Designation, DeptName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.Salary = Salary;
        this.Designation = Designation;
        this.DeptName = DeptName;
    }
    return Employee;
}());
var EmployeeOp = /** @class */ (function () {
    function EmployeeOp() {
        EmployeeOp.Employees = new Array();
        EmployeeOp.Employees.push(new Employee(101, "A", 1200, "Manager", "IT"));
        EmployeeOp.Employees.push(new Employee(102, "B", 1300, "Lead", "SL"));
        EmployeeOp.depts = new Array();
        EmployeeOp.depts.push("IT");
        EmployeeOp.depts.push("HR");
        EmployeeOp.depts.push("SL");
        EmployeeOp.depts.push("DS");
        EmployeeOp.desig = new Array();
        EmployeeOp.desig.push("Manager");
        EmployeeOp.desig.push("Lead");
        EmployeeOp.desig.push("Staff");
        EmployeeOp.desig.push("SSE");
    }
    EmployeeOp.isEmployeePresent = function (id) {
        return EmployeeOp.Employees.filter(function (e) { return e.EmpNo === id; }).length > 0;
    };
    EmployeeOp.isEmpNameValid = function (name) {
        return (!/\d/.test(name) && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name));
    };
    EmployeeOp.validateData = function (emp) {
        // Validation Rules
        // 1. EmpNo MUST be unique
        // 2. EmpNAme MUST not have number or Special Characters
        // 3. DeptName and Designation names MUST be from the array of depts and desig
        // 4. Salary Must be Positive integer
        if (!this.isEmployeePresent(emp.EmpNo) &&
            this.isEmpNameValid(emp.EmpName) &&
            EmployeeOp.depts.indexOf(emp.DeptName) !== -1 &&
            EmployeeOp.desig.indexOf(emp.Designation) !== -1 &&
            emp.Salary > 0)
            return true;
        return false;
    };
    EmployeeOp.addEmployee = function (emp) {
        // Call to validateData(), if it is true then push record in array
        // Logic to add employee in Employees Array
        if (this.validateData(emp)) {
            EmployeeOp.Employees.push(emp);
            console.log("New employee has been added successfully.");
            return EmployeeOp.Employees;
        }
        console.log("An error occured while adding an employee.");
    };
    EmployeeOp.updateEmployee = function (emp) {
        // Call to validateData(), if it is true then push record in array
        // search Employee from array if found update it
        // Logic to add employee in Employees Array
        if (this.validateData(emp))
            EmployeeOp.Employees.push(emp);
        return EmployeeOp.Employees;
    };
    EmployeeOp.deleteEmployee = function (emp) {
        // search Employee from array if found delete it
        // Logic to add employee in Employees Array
        if (EmployeeOp.isEmployeePresent(emp.EmpNo)) {
            var remainingEmployees = EmployeeOp.Employees.filter(function (e) { return e.EmpNo !== emp.EmpNo; });
            EmployeeOp.Employees = __spreadArray([], remainingEmployees, true);
            console.log("Employee has been deleted successfully.");
            return EmployeeOp.Employees;
        }
        console.log("Employee with the given details doesn't exist.");
    };
    EmployeeOp.getAllEmployees = function (criteria) {
        // criteria could by DeptName, Designation
        var filteredEmployees = EmployeeOp.Employees.filter(function (e) { return e.DeptName === criteria || e.Designation === criteria; });
        EmployeeOp.Employees = __spreadArray([], filteredEmployees, true);
        return EmployeeOp.Employees;
    };
    return EmployeeOp;
}());
new EmployeeOp();
var new_emp = new Employee(103, "Aditya", 100000, "SSE", "DS");
EmployeeOp.addEmployee(new_emp);
console.log("===================================================================");
console.log("Printing the list of employees: ");
EmployeeOp.getAllEmployees("DS").forEach(function (emp) {
    console.log("Employee ID: ".concat(emp.EmpNo));
    console.log("Employee Name: ".concat(emp.EmpName));
    console.log("Employee Salary: ".concat(emp.Salary));
    console.log("Employee Dept: ".concat(emp.DeptName));
    console.log("Employee Designation: ".concat(emp.Designation, "\n"));
});
console.log("===================================================================");
EmployeeOp.deleteEmployee(new Employee(104, "Aditya", 100000, "SSE", "DS"));
