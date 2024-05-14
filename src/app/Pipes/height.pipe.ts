import { Pipe, PipeTransform } from '@angular/core';
import { Height } from '../Enums/height';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: Height, ...args: unknown[]): unknown {
      return value === Height.FourFeet
    ? "4 Feet"
    : value === Height.FourFeet1Inch
    ? "4 Feet 1 Inch"
    : value === Height.FourFeet2Inches
    ? "4 Feet 2 Inch"
    : value === Height.FourFeet3Inches
    ? "4 Feet 3 Inch"
    : value === Height.FourFeet4Inches
    ? "4 Feet 4 Inch"
    : value === Height.FourFeet5Inches
    ? "4 Feet 5 Inch"
    : value === Height.FourFeet6Inches
    ? "4 Feet 6 Inch"
    : value === Height.FourFeet7Inches
    ? "4 Feet 7 Inch"
    : value === Height.FourFeet8Inches
    ? "4 Feet 8 Inch"
    : value === Height.FourFeet9Inches
    ? "4 Feet 9 Inch"
    : value === Height.FourFeet10Inches
    ? "4 Feet 10 Inch"
    : value === Height.FourFeet11Inches
    ? "4 Feet 11 Inch"
    : value === Height.FiveFeet
    ? '5 Feet'
    : value === Height.FiveFeet1Inch
    ? '5 Feet 1 Inch'
    : value === Height.FiveFeet2Inches
    ? '5 Feet 2 Inch'
    : value === Height.FiveFeet3Inches
    ? '5 Feet 3 Inch'
    : value === Height.FiveFeet4Inches
    ? '5 Feet 4 Inch'
    : value === Height.FiveFeet5Inches
    ? '5 Feet 5 Inch'
    : value === Height.FiveFeet6Inches
    ? '5 Feet 6 Inch'
    : value === Height.FiveFeet7Inches
    ? '5 Feet 7 Inch'
    : value === Height.FiveFeet8Inches
    ? '5 Feet 8 Inch'
    : value === Height.FiveFeet9Inches
    ? '5 Feet 9 Inch'
    : value === Height.FiveFeet10Inches
    ? '5 Feet 10 Inch'
    : value === Height.FiveFeet11Inches
    ? '5 Feet 11 Inch'
    : value === Height.SixFeet0Inches
    ? '6 Feet'
    : value === Height.SixFeet1Inches
    ? '6 Feet 1 Inch'
    : value === Height.SixFeet2Inches
    ? '6 Feet 2 Inch'
    : value === Height.SixFeet3Inches
    ? '6 Feet 3 Inch'
    : value === Height.SixFeet4Inches
    ? '6 Feet 4 Inch'
    : value === Height.SixFeet5Inches
    ? '6 Feet 5 Inch'
    : value === Height.SixFeet6Inches
    ? '6 Feet 6 Inch'
    : 'Unknown';

}}
