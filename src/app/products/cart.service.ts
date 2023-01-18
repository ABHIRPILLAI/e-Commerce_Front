import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[]//store content
  cartlist = new BehaviorSubject([])//to pass stream of data
  constructor() { }

  // add to cart

  addcart(product:any)
  { 
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)//behaviorsubject
    console.log(this.cartlist);

    //price
    let total=this.gettotal()
    console.log(total);
    
  }
  gettotal()
  {
    var sum=0;
    this.cartarray.map((item:any)=>
    {
      sum+=item.price
    })
    return sum;
  }
  removecart(product:any)
  {
    this.cartarray.map((item:any,index:any)=>
    {
      if(product.id==item.id)
      {
        this.cartarray.splice(index,1);
      }
    })
    this.cartlist.next(this.cartarray)//remove andd update
  }


  //remove all from cart


  removeAll()
  {
    this.cartarray=[]
    this.cartlist.next(this.cartarray)//remove andd update


  }
}
