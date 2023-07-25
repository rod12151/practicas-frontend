let baserUrl='http://localhost:8080'
export default baserUrl;

export interface DecodeToken{
    authorities:string[],
    isAdmin:boolean,
    isJefe:boolean,
    isUser:boolean,
    sub:string
}
export class Roles{
    isAdmin?:boolean;
    isJefe?:boolean;
    isUser?:boolean;
    constructor(admin:boolean,jefe:boolean,user:boolean){
        this.isAdmin=admin;
        this.isJefe=jefe;
        this.isUser=user;

    }
}

export interface UserRequest{
    dni:string;
    fullName:string;
    idUser:number;
    username:string
}