import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSaleState'
})
export class OnSaleStatePipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    let result:string = '';
    if(value){
      result = "OnSale!"
    }
    else{
      result = "Not on sale.."
    }
    return result;
  }

}
