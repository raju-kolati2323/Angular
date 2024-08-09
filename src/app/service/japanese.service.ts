import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class JapaneseService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Sushi",
        image: "https://fthmb.tqn.com/LJLRfoSPI_56ihVGr15EBH18yFk=/5096x3418/filters:fill(auto,1)/GettyImages-126553802-56a541cb3df78cf772875a68.jpg",
        ingredients: ["Rice", "Nori", "Fish", "Vegetables", "Soy Sauce"],
        description: "A Japanese dish consisting of vinegared rice combined with various ingredients such as seafood, vegetables, and sometimes tropical fruits.",
        cost: "₹800 ($10.00) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Ramen",
        image: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
        ingredients: ["Noodles", "Broth", "Pork", "Egg", "Green Onions"],
        description: "A popular Japanese noodle soup consisting of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Tempura",
        image: "https://img-global.cpcdn.com/recipes/7676f9724fdfb355/1200x630cq70/photo.jpg",
        ingredients: ["Shrimp", "Vegetables", "Flour", "Egg", "Oil"],
        description: "A Japanese dish of seafood or vegetables that have been battered and deep-fried.",
        cost: "₹750 ($9.38) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Sashimi",
        image: "https://th.bing.com/th/id/OIP.hLwhCOrTj2Uwi_hF7NT2lQHaEK?rs=1&pid=ImgDetMain",
        ingredients: ["Raw Fish", "Soy Sauce", "Wasabi", "Ginger", "Radish"],
        description: "A Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.",
        cost: "₹900 ($11.25) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Udon",
        image: "https://fthmb.tqn.com/Ih3mnzWBcezcyK2Ur9DgMqZmUuk=/4256x2832/filters:fill(auto,1)/udon-174841251-5aa7ce8bba617700379c39f1.jpg",
        ingredients: ["Udon Noodles", "Broth", "Green Onions", "Tempura", "Kamaboko"],
        description: "A type of thick wheat flour noodle commonly used in Japanese cuisine, served hot in soup or as a cold noodle dish.",
        cost: "₹650 ($8.13) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Yakitori",
        image: "https://www.hungryhuy.com/wp-content/uploads/char-grilled-yakitori.jpg",
        ingredients: ["Chicken", "Soy Sauce", "Mirin", "Sugar", "Skewers"],
        description: "A Japanese type of skewered chicken, grilled over a charcoal fire and seasoned with a sweet soy sauce-based sauce.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Tonkatsu",
        image: "https://cdn.tasteatlas.com/images/social/446c56a4af2c4c2093749f92cadd5412.jpg",
        ingredients: ["Pork Cutlet", "Panko", "Egg", "Flour", "Cabbage"],
        description: "A Japanese dish that consists of a breaded, deep-fried pork cutlet, typically served with shredded cabbage and a tangy sauce.",
        cost: "₹750 ($9.38) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Miso Soup",
        image: "https://cdn.tasteatlas.com/images/recipes/9b79b196c8794a2c966657c13332a25d.jpg?mw=1300",
        ingredients: ["Miso Paste", "Tofu", "Wakame", "Green Onions", "Dashi"],
        description: "A traditional Japanese soup consisting of a stock called dashi into which softened miso paste is mixed, along with other ingredients such as tofu and seaweed.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Okonomiyaki",
        image: "https://cdn.shopify.com/s/files/1/0111/1729/7722/files/pancake-blog-header-image-1570px_480x480.jpg?v=1648665103",
        ingredients: ["Eggs", "Flour", "Dashi stock", "Cabbage", "Meat"],
        description: "A savory Japanese pancake containing a variety of ingredients, including cabbage and meat, and often topped with a variety of condiments.",
        cost: "₹650 ($8.13) (Ingredients + Making Fee)"
    }
];
  getdishes6(){
    return of(this.dishlist);
  }
  adddish(p:dishes){
    this.dishlist.push(p)
    return 'Product added successfully'
  }
  updatedish(pro:dishes){
    const ind=this.dishlist.findIndex((ele:any)=>{ele.id==pro.id});
    if(ind!=-1){
        this.dishlist.splice(ind,1,pro)
        return 'Product updated successfully'
    }
    else{
        return 'Product not found'
    }
  }
  deletedish(id:any){
    const ind=this.dishlist.findIndex((ele:any)=>ele.id==id)
    if(ind!=-1){
        this.dishlist.splice(ind,1)
        return 'Product deleted successfully'
    }
    else{
        return 'Product not found'
    }
  }
}
