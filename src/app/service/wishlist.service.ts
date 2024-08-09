import { Injectable } from '@angular/core';
import { dishes } from './dish';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist:dishes[]=[]
  constructor() { }
  getwishlist(){
    return of(this.wishlist)
  }

  removefromwish(id:any){
    this.wishlist = this.wishlist.filter((d) =>d.id!= id);
  }

  addtowish(pro:dishes){
    let index=this.wishlist.findIndex(p=>p.id==pro.id)
    if(index==-1){
      this.wishlist.push(pro);
      return 'Product added to cart successfully'
    }
    else{
      return 'Product already exists'
    }
  }
}
