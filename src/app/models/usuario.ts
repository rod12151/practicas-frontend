export class UserRequest {
    dni?:string;
    name?: string;
    lastName?: string;
    profession?: string;
    birthDate?: string;
  }
  
  export interface UserResponse {
    idUser: number;
    dni:string;
    username:string;
    fullName:string;
    profession:string
  }
  
  