// Write your solution in this file!
// const updateEmployeeWithKeyAndValue(employee, key, value)  = {
//     employees: {
//         name: "Tony",
//         address: "3899 Primrose Ct"
//     }
// }

const employee = {
    name: "Bob",
    streetAddress: "100 county rd"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newEmployee = {...employee};
    console.log("This is the value of the second perameter key: ", key)
    console.log("This is the value of the third perameter value: ", value)
    newEmployee[key] = value;

    return newEmployee;
}


const luisObject = {
    name: "Luis",
    favoriteMovie: "Star Wars"
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    console.log("employee: ", employee);
    console.log("key: ", key);
    console.log("value: ", value);



    employee[key] = value;

    return employee;
}




function deleteFromEmployeeByKey(employee, key) {
    const veryNewEmployee = {...employee}
    

    delete veryNewEmployee[key];
    return veryNewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(updateEmployeeWithKeyAndValue())

