export interface InternModel extends TOKEN{
    ID:number;
    fullName:string;
    passport:string;
    phone:number;
    image?:string;
}
export interface LoginModel extends TOKEN{
    _id?:string;
    code?:string;
    phone?:number;
}

export interface quesitnnersModel extends TOKEN{
    age?:Number;
    country?:string;
    city?:string;
    graducition?:number;
    academic?:string;
    medical?:string;
    residency?:string;
    department?:string;
    yearResidency?:number;

}

export interface TOKEN{
    token?:string
}