import { LaborRegimeResponse } from "./laborRegime";
import { UserResponse } from "./usuario";
import { WorkConditionResponse } from "./workCondition";

export class Contrato {
  private _dniUser: string;
  private _codeLaborRegime: string;
  private _codeWorkCondition: string;
  private _position: string;
  private _salary: number;
  private _startDate: string;
  private _finishDate: string;

  constructor(
    dniUser: string,
    codeLaborRegime: string,
    codeWorkCondition: string,
    position: string,
    salary: number,
    startDate: string,
    finishDate: string
  ) {
    this._dniUser = dniUser;
    this._codeLaborRegime = codeLaborRegime;
    this._codeWorkCondition = codeWorkCondition;
    this._position = position;
    this._salary = salary;
    this._startDate = startDate;
    this._finishDate = finishDate;
  }

  // Métodos de acceso (getters)
  get dniUser(): string {
    return this._dniUser;
  }

  get codeLaborRegime(): string {
    return this._codeLaborRegime;
  }

  get codeWorkCondition(): string {
    return this._codeWorkCondition;
  }

  get position(): string {
    return this._position;
  }

  get salary(): number {
    return this._salary;
  }

  get startDate(): string {
    return this._startDate;
  }

  get finishDate(): string {
    return this._finishDate;
  }

  // Métodos de modificación (setters)
  set dniUser(value: string) {
    this._dniUser = value;
  }

  set codeLaborRegime(value: string) {
    this._codeLaborRegime = value;
  }

  set codeWorkCondition(value: string) {
    this._codeWorkCondition = value;
  }

  set position(value: string) {
    this._position = value;
  }

  set salary(value: number) {
    this._salary = value;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  set finishDate(value: string) {
    this._finishDate = value;
  }
  toContractoRequest(): contratoRequest {
    return {
      dniUser: this._dniUser,
      codeLaborRegime: this._codeLaborRegime,
      codeWorkCondition: this._codeWorkCondition,
      position: this._position,
      salary: this._salary,
      startDate: this._startDate,
      finishDate: this._finishDate,
    };
  }
}


export interface contratoRequest {
  dniUser: string;
  codeLaborRegime: string;
  codeWorkCondition: string;
  position: string;
  salary: number;
  startDate: string;
  finishDate: string;

}

export interface contratoResponse{
  idContract:number;
  position:string;
  startDate:string;
  finishDate:string;
  salary: number;
  status:boolean;
  user:UserResponse;
  workCondition:WorkConditionResponse;
  laborRegime:LaborRegimeResponse
  }


