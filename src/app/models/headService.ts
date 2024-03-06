import { ServicioResponse } from "./servicios";
import { UserResponse } from "./usuario";

export class HeadserviceRequest {
  private _codeservice: string;
  private _dniUser: string;
  private _startDate: string;
  private _finishDate: string;
  
  constructor(
    codeservice: string,
    dniUser: string,
    startDate: string,
    finishDate: string,
  ) {
    this._codeservice = codeservice
    this._dniUser = dniUser
    this._startDate = startDate
    this._finishDate = finishDate
  }
  
  get codeservice(): string {
    return this._codeservice;
  }

  set codeservice(value: string) {
    this._codeservice = value;
  }

  get dniUser(): string {
    return this._dniUser;
  }

  set dniUser(value: string) {
    this._dniUser = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get finishDate(): string {
    return this._finishDate;
  }

  set finishDate(value: string) {
    this._finishDate = value;
  }
  toHeaderServiceRequest(): headserviceRequest {
    return {
      codeService: this._codeservice,
      dniUser: this._dniUser,
      startDate: this._startDate,
      finishDate: this._finishDate,
    }
  }
}
export interface headserviceRequest {
  codeService: string,
  dniUser: string,
  startDate: string,
  finishDate: string,
}

export interface HeadserviceResponse {
  idHeadService: number;
  startDate: string;
  finishDate: string;
  service: ServicioResponse;
  user: UserResponse
}

