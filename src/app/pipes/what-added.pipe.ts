import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whatAdded',
})
export class WhatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
}
