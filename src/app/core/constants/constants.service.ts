import { InjectionToken } from '@angular/core';

export interface IVersion {
  App: string;
  ver: string;
}

export const VERSION = new InjectionToken<IVersion>('version');

export const constantsService = { App: "TaskManager", Ver: "1.0" };
