//------ create custom objects using constructor function syntax---

//Employee object
//Object name should start with Caps letter
function Employee(eid,ename,esal)
{
    this.empId = eid;
    this.empName = ename;
    this.empSal = esal;
    this.dispEmpInfo = function () {
        return "EMP_ID : " + this.empId + " EMP_NAME : " +this.empName+ " Salary : " +this.empSal
    }

    this.calcEmpAnnualSalary = function() {
        return this.empSal * 10;
    }
}
/**close object */

    var emp1 = new Employee(111, "Priyanka", 1000); 
    /** while creating object of employee - use 
    new Employee() */
    var emp2 = new Employee(222, "Kuma", 2000);

    console.log("type of emp obj is : "+typeof emp1);

    console.log("Display emp1 info : " + emp1.dispEmpInfo()+ "annual salary : "+emp1.calcEmpAnnualSalary());

    console.log("Display emp2 info : " + emp2.dispEmpInfo()+ "annual salary : "+emp2.calcEmpAnnualSalary());

