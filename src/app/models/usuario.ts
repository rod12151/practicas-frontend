export class UserRequest {
    dni?:string;
    name?: string;
    lastName?: string;
    profession?: string;
    birthDate?: string;
  }
  
  export class UserResponse {
    idUser?: number;
    dni?:string;
    username?:string;
    fullName?:string;
  }
  