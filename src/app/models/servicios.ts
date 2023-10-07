export interface ServicioRequest{
  name?:string;
  code?:string;
  description?:string;
}
export class ServicioResponse {
    id?: number;
    code?:string;
    name?:string;
    description?:string;
  }