let id: number =5; 
let company: string = "Acme Corp";
let isPublished: boolean = true;

let ids: number[] = [1,2,3,4,5];
let x: any = "abc"
let xArr: any[] = ["abc", 0, true]


const concatenateValues = (a: string, b: string) => {
    return a+b;
}

console.log(concatenateValues("Hello", "World"))
// console.log(concatenateValues(1, 2))

interface UserInterface {
    id: number;
    name: string; 
    age?: number; // age is an optional value
    greet(message:string): void;

}

const User: UserInterface = {
    id: 2, 
    name: "Vatsal",
    greet(message){
        console.log(message)
    }
}

console.log(User.age);

type IDFieldType = string | number;

const printId = (id: IDFieldType) => { // union of string and number
    console.log("ID: "+id)
};

printId(123456)

interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string; 
}

type Employee= BusinessPartner & UserIdentity // Intersection 

const signContract = (employee: Employee): void =>  {
    console.log(" Contract signed by "+employee.name+" with email: "+employee.email)
}

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
} as const;

type LoginErrorType = typeof LoginError[keyof typeof LoginError];


const printErrorMsg = (error: LoginErrorType) => {

    if(error === LoginError.Unauthorized){
        console.log("User not authorised")
    } 
    else if (error === LoginError.NoUser){
        console.log("No user found")
    } 
    else{
        console.log("Something went wrong!")
    }
    console.log(error);
}

printErrorMsg(LoginError.Unauthorized);

//Generic
class StorageContainer<T> {

    private contents: T[];

    constructor() {
        this.contents = [];

    }

    addItem(item: T) : void {
        this.contents.push(item);
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx];
    }

}

const usernames = new StorageContainer<string>();
usernames.addItem("John");
usernames.addItem("Jane");
console.log(usernames.getItem(0))

const countVal = new StorageContainer<number>();
countVal.addItem(1);
countVal.addItem(2);
console.log(countVal.getItem(0))

interface Employee {
    name: string;
    readonly empId: number; // readonly makes it non-mutable
}

const employee: Employee = {
    name: "abc", 
    empId: 123

};

employee.name="def"
// employee.empId=5464

console.log(employee)
