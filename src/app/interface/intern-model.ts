export interface userModel extends TOKEN{
    ID:number;
    fullName:string;
    passport:string;
    phone:number;
    image?:string;
    academic?:string;
    role?:string;
    roleNumber?:number

}
export interface LoginModel extends TOKEN{
    _id?:string;
    code?:string;
    phone?:number;
}

export interface academic {
    _id:number,
    fullName:string
}

export interface quesitnnersModel extends TOKEN{
    age?:Number;
    country?:string;
    city?:string;
    graduation?:number;
    academic?:academic;
    medical?:string;
    residency?:string;
    department?:string;
    yearResidency?:number;

}

export interface TOKEN{
    token?:string
}

export interface adminModel extends TOKEN{
    ID:string;
    fullName:string;
    password:string
}

export interface academicModel{
    ID:number;
    fullName:string;
}

export interface testFile{
    date:Date;
    name:string;
    subject:string;
    url:string;
}