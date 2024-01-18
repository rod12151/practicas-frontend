import { ServicioResponse } from "./servicios";
import { UserResponse } from "./usuario";

export class HeadserviceRequest {
    codeservice?:string;
    dniUser?: string;
    startDate?: string;
    finishDate?: string;
  }
  
  export interface HeadserviceResponse {
    idHeadService: number;
    startDate:string;
    finishDate:string;
    service:ServicioResponse;
    user:UserResponse
  }
  