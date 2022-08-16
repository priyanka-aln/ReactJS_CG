//create custom objects using inline creation syntax

var employee = {
    "empId" : 333,
    "empName" : "Priyanka",
    "empSal" : 9000.0,
    "dispEmpInfo" : function() {
        return "EMP_ID : " +this.empId + " Employee name : " +this.empName + " Salary : "+this.empSal;

    },

    "calcAnnualSal" : function() {
        return this.empSal* 20;
    }
}

console.log("type of employee custom obj is : "+ typeof(employee));
console.log("Employee info ",employee.dispEmpInfo());
console.log("Employee anuual sal : ", employee.calcAnnualSal());