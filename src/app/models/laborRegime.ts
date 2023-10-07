export interface LaborRegimeRequest{
    name?:string;
    code?:string;
    description?:string;
}
export class LaborRegimeResponse{
    id?:number;
    name?:string;
    code?:string;
    description?:string;
}