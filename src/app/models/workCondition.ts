export interface WorkConditionRequest{
    name?:string;
    code?:string;
    description?:string;
}
export interface WorkConditionResponse{
    id:number;
    name:string;
    code:string;
    description:string;
}