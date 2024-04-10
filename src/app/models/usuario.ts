export class UserRequest {
    dni?:string;
    name?: string;
    lastName?: string;
    profession?: string;
    birthDate?: string;
    genero?:Genero;
  }
  
  export interface UserResponse {
    idUser: number;
    dni:string;
    username:string;
    name:string;
    lastName:string;
    profession:string
    status:boolean
  }


  export enum Genero {
    Masculino = "MASCULINO",
    Femenino = "fEMENINO",
    None = 'NONE'
}

export  interface GeneroValue{
  viewValue:string;
  value:string;
  

}
  
  