export interface InternModel {
    ID:number;
    fullName:string;
    passport:string;
    phone:number;
}
export interface LoginModel{
    _id?:string;
    code?:string;
    phone?:number;
}

export interface formModel2{
    age:Number;
    country:string;
    city:string;
    graducition:string;
    academic:string;
}