import { Component, OnInit } from '@angular/core';
import {  Router, Routes } from '@angular/router';
import { CartService } from '../cart.service';
import  party  from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartitems:any=[];
summ:any
discountamount:any
  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe((
      data:any
    )=>
    {
      console.log(data);
      this.cartitems=data
      
    })
    this.summ=this.cart.gettotal()

  }

removeitem(product:any)
{
this.cart.removecart(product)
this.summ=this.cart.gettotal()

}
remove()
{
  this.cart.removeAll()
}

discount3(source:any)
{
  //party.jssssssss


  let discount=(this.summ*3)/100
  this.discountamount=this.summ-discount
  party.confetti(source)

}
discount10()
{
  let discount=(this.summ*10)/100
  this.discountamount=this.summ-discount

}
discount15()
{
  let discount=(this.summ*15)/100
  this.discountamount=this.summ-discount

}
discount30()
{
  let discount=(this.summ*30)/100
  this.discountamount=this.summ-discount

}
alert()
{
  alert("Order Placed")
  this.router.navigateByUrl("")
  this.cart.removeAll()
}

///partyjs install for animation

}
