import {Gender, IPerson} from './interfaces';

export class Person {
    firstName: string;
    lastName: string;
    course: string;
    age: number;
    address: string;
    phoneNumber: string;
    sex: Gender;

    constructor(person: IPerson) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
        this.address = person.address;
        this.course = person.course;
        this.phoneNumber = person.phoneNumber;
        this.sex = person.sex;
    }
    
}