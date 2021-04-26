// Your code here
function createEmployeeRecord(record) {
    const [firstName, familyName, title, payPerHour] = record
    return { firstName: firstName,
    familyName: familyName,
title: title,
payPerHour: payPerHour,
timeInEvents: [],
timeOutEvents: []}
}

function createEmployeeRecords(records) {
    return records.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(employee, timeIn) {
   let [date, hour] = timeIn.split(" ")
    const timeInEvent = {type: "TimeIn",
                    date: date,
                    hour: parseInt(hour,10)}
                 employee.timeInEvents.push(timeInEvent)
                 return employee
}

function createTimeOutEvent(employee, timeIn) {
    let [date, hour] = timeIn.split(" ")
     const timeOutEvent = {type: "TimeOut",
                     date: date,
                     hour: parseInt(hour,10)}
                  employee.timeOutEvents.push(timeOutEvent)
                  return employee
 }

 function hoursWorkedOnDate(employee, date) {
     const timeInRecord = employee.timeInEvents.find((element) => element.date === date)
     const timeOutRecord = employee.timeOutEvents.find((element) => element.date === date)
     return  (timeOutRecord.hour / 100) - (timeInRecord.hour / 100)
 }

 function wagesEarnedOnDate(employee, date) {
     let hours = hoursWorkedOnDate(employee, date)
     return (hours * employee.payPerHour)
 }

 function allWagesFor(employee) {
    const dates = employee.timeInEvents.map((timeObj) =>  timeObj.date)
    return dates.reduce(function(accumulator, currentValue) {
        accumulator = accumulator + wagesEarnedOnDate(employee,currentValue)
        return accumulator
    },0)
    
 }
 
 function calculatePayroll(employees) {
     return employees.reduce((accumulator, currentValue) => { return accumulator + allWagesFor(currentValue)},0)

 }

function findEmployeeByFirstName(employees,firstName) {
   return employees.find(element => element.firstName = firstName)

}