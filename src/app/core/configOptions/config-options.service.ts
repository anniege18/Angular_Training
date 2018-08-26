import { Injectable } from '@angular/core';
import { IConfig } from './config.interface';
import { CapitalizePipe } from '../../shared/pipes/capitalize/capitalize.pipe';


const defaults = {
  id: 0,
  name: 'Book Store',
  login: null,
  email: null,
  phone: null,
  address: null
};

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: IConfig = defaults;

  static initOptions() {
    let capitalize = new CapitalizePipe();

    ['get', 'set'].map(methodPrefix => {
      return Object.keys(defaults).map(key => {

        const methodName = `${methodPrefix}${capitalize.transform(key)}`;
        return this.prototype[methodName] = ( methodPrefix === 'get' ) ?
          function () { return this.config[key]; } :
          function (value) { this.config[key] = value; }
      })
    })
  }
}

ConfigOptionsService.initOptions();
