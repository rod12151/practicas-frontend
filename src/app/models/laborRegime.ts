export interface LaborRegimeRequest{
    name?:string;
    code?:string;
    description?:string;
}
export interface LaborRegimeResponse{
    id:number;
    name:string;
    code:string;
    description:string;
}