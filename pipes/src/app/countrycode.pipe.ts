import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode'
})
export class CountrycodePipe implements PipeTransform {

  transform(countrycode: string): string {
    let fullCountry = "DEFAULT";
    if (countrycode == "EE") {
      fullCountry = "ESTONIA";
    } else if (countrycode == "DE") {
      fullCountry = "GERMANY";
    } else if (countrycode == "FI") {
      fullCountry = "FINLAND";
    } else if (countrycode == "RU") {
      fullCountry = "RUSSIA";
    } else if (countrycode == "SE") {
      fullCountry = "SWEDEN";
    } else if (countrycode == "PL") {
      fullCountry = "POLAND";
    }
    return fullCountry;
  }

}
