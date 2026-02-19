"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let company = "Acme Corp";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = "abc";
let xArr = ["abc", 0, true];
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues("Hello", "World"));
const User = {
    id: 2,
    name: "Vatsal",
    greet(message) {
        console.log(message);
    }
};
console.log(User.age);
const printId = (id) => {
    console.log("ID: " + id);
};
printId(123456);
const signContract = (employee) => {
    console.log(" Contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({
    name: "Vatsal",
    creditScore: 700,
    id: 1,
    email: "vatsal@acmecorp.com"
});
// error- unauthorized, user doesn't exist, wrong credentials, internal 
const LoginError = {
    Unauthorized: "unauthorized",
    NoUser: "nouser",
    WrongCredentials: "wrongcredentials",
    Internal: "internal"
};
const printErrorMsg = (error) => {
    if (error === LoginError.Unauthorized) {
        console.log("User not authorised");
    }
    else if (error === LoginError.NoUser) {
        console.log("No user found");
    }
    else {
        console.log("Something went wrong!");
    }
    console.log(error);
};
printErrorMsg(LoginError.Unauthorized);
//Generic
class StorageContainer {
    contents;
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("John");
usernames.addItem("Jane");
console.log(usernames.getItem(0));
const countVal = new StorageContainer();
countVal.addItem(1);
countVal.addItem(2);
console.log(countVal.getItem(0));
const employee = {
    name: "abc",
    empId: 123
};
employee.name = "def";
// employee.empId=5464
console.log(employee);
//# sourceMappingURL=tutorial.js.map