//Encapsulation 

export class EmployeeData
{
    eid;
    ename;


    //Private data
    #salary=50000;


    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;

    }

    //method
    getData()
    {
        console.log("Employee Id :"+this.eid+"\nEmployee Name :"+this.ename+"\nEmployee Salary :"+this.#salary);
    }
    // getter method
    getSalary()
    {
        return this.#salary;
    }


    //setter method

    setSalary(salary)
    {
        if(this.#salary<salary){

            //this.#salary=salary;
            
            console.log("Expected Salary is ",this.#salary=salary)
        }
        else{
            console.log("Change Rejected.... Salary is less");
        }

    }
}

// let emp=new EmployeeData(101,"Suresh");
// emp.getData();

 
