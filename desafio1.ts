// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


let employee = {
    code: 10,
    name: 'John'
}


interface Employee {
    code: number,
    name: string
}

let employee2: Employee;
employee2.code = 10;
employee.name = "John";