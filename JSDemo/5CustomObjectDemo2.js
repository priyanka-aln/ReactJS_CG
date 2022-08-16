var emp = new Object();
emp.empId = 100;
emp.empName = "Kuma";
emp.empSal = 1200.12;
emp.dispEmpInfo = function() {
    return "EMP_ID : " +this.empId + " Employee name : " +this.empName + " Salary : "+this.empSal;

};
/** ["functionname"] -- to provide name for function */
emp["calcEmpAnnualSal"] = function() {
    return this.empSal*2;
}

emp.calcEmpAnnualSal();
console.log("Emp Salary : "+emp.calcEmpAnnualSal() + " Emp info : "+emp.dispEmpInfo());
