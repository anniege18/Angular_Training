import { InjectionToken } from '@angular/core';

const charRange = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const RandomNChars = new InjectionToken<string>('RandomNChars');

export const GeneratorFactory = function (qty: number) {
  return function () {
    return Array(qty)
      .join()
      .split(',')
      .map(() => charRange.charAt(Math.floor(Math.random() * charRange.length)))
      .join('');
  }
}
