import { ServicioResponse } from "./servicios";
import { UserResponse } from "./usuario";

export class AsigUserServiceRequest {
    private _dniBoss: string;
    private _codeService: string;
    private _dniUser: string;
    private _startDate: string;
    private _finishDate: string;

    constructor(
        dniBoss: string,
        codeService: string,
        dniUser: string,
        startDate: string,
        finishDate: string,
    ) {
        this._dniBoss = dniBoss
        this._codeService = codeService
        this._dniUser = dniUser
        this._startDate = startDate
        this._finishDate = finishDate
    }
    get dniBoss(): string {
        return this._dniBoss;
    }

    set dniBoss(value: string) {
        this._dniBoss = value;
    }

    get codeService(): string {
        return this._codeService;
    }

    set codeService(value: string) {
        this._codeService = value;
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

    toAsigUserServiceRequest(): asigUserServiceRequest {
        return {
            dniBoss: this._dniBoss,
            codeService: this._codeService,
            dniUser: this._dniUser,
            startDate: this._startDate,
            finishDate: this._finishDate,
        }
    }

}

export interface asigUserServiceRequest {
    dniBoss: string
    codeService: string,
    dniUser: string,
    startDate: string,
    finishDate: string,
}

export interface asigUserServiceResponse {
    idAssignment: number;
    startDate: string;
    finishDate: string;
    status: boolean;
    service: ServicioResponse;
    user: UserResponse;
}