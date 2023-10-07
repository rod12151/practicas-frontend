export interface WorkConditionRequest{
    name?:string;
    code?:string;
    description?:string;
}
export class WorkConditionResponse{
    id?:number;
    name?:string;
    code?:string;
    description?:string;
}