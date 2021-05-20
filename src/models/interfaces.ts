export interface IPerson{
    firstName: string;
    lastName: string;
    course: string;
    age: number;
    address: string;
    phoneNumber: string;
    sex: Gender;
}

export enum Gender {
    male = 0, 
    female = 1, 
    transgender = 2, 
    gender_neutral = 3, 
    non_binary = 4, 
    agender =5, 
    pangender = 6, 
    genderqueer =7, 
    two_spirit =8, 
    third_gender=9
}