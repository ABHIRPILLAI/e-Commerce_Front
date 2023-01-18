import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchKey:string,propname:string): any[]  {
    const result:any=[];
    if(!allproducts || searchKey=="" || propname=="")//when all null ie when we click the search bar all the content should be displayed then only when we search value needed should be filtered

  {
    return allproducts;
  }
  //searching we need to convet all to lowercase

  allproducts.forEach((product:any)=>
  {
    if (product[propname].trim().toLowerCase().includes(searchKey.toLocaleLowerCase())) {
      result.push(product)
      
    }
  })


    return result;
  }

}
