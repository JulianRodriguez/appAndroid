import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageProvider {

  public setItem(key: string, value: any): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  }

  public getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item && item.includes('{') ? JSON.parse(item) : item;
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
