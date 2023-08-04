const employee = {
    name: "Ellis",
    streetAddress: "404 Rocky Road"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;

    return newEmployee
}

// updateEmployeeWithKeyAndValue(employee, "age", "20")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee};

    delete deleteEmployee[key];
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}