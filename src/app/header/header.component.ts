import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';
import { CartService } from '../products/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartcount:number=0

  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe((
      data
    )=>
    {
      if(data)
      {
        this.cartcount=data.length
      }
    })
  }
//promise is like real world ie s or no so that is here subscribe in js ith is resolve and reject state using then and catch
  search(event:any)//to search
  {
    let searchKey=event.target.value
    this.api.searchKey.next(searchKey)//next is a method in behaviouralSubject
  }

}
