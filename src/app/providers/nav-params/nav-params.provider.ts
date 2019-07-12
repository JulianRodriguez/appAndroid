import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavParamsProvider {
  private _params: any;

  public set params(params: any) {
    this._params = params;
  }

  public get params() {
    const cloneParams = JSON.parse(
      JSON.stringify(this._params ? this._params : '')
    );
    this._params = null;
    return cloneParams;
  }
}
