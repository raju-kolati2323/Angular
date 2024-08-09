import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class ItalianService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Spaghetti Carbonara",
        image: "https://uploads-ssl.webflow.com/5e77b0509a2d8338a398c04b/5e77b0509a2d83a0bf98c0d7_Quick%20Bacon%20Spaghetti%20Carbonara.jpeg",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Pepper"],
        description: "A classic Roman pasta dish made with spaghetti, eggs, pancetta, and Parmesan cheese, seasoned with black pepper.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Margherita Pizza",
        image: "https://zenideen.com/wp-content/uploads/2020/06/pizza-mozzarella-tomaten-scaled.jpeg",
        ingredients: ["Pizza Dough", "Tomatoes", "Mozzarella", "Basil", "Olive Oil"],
        description: "A traditional Neapolitan pizza topped with fresh tomatoes, mozzarella cheese, and basil, drizzled with olive oil.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Lasagna",
        image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-4272x2848.jpg",
        ingredients: ["Lasagna Noodles", "Beef", "Tomato Sauce", "Ricotta", "Mozzarella"],
        description: "A baked Italian dish consisting of layers of lasagna noodles, meat sauce, ricotta cheese, and mozzarella cheese.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Risotto",
        image: "https://www.thespruceeats.com/thmb/OT9C15ZzeZETdJ6bxYCxEMIDnYc=/2500x1669/filters:fill(auto,1)/chickenrisotto2500-598cd29b6f53ba001014cb54.jpg",
        ingredients: ["Arborio Rice", "Chicken Broth", "Parmesan Cheese", "Onions", "Wine"],
        description: "A creamy Italian rice dish cooked slowly with chicken broth, onions, and Parmesan cheese, often flavored with white wine.",
        cost: "₹650 ($8.10) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Gnocchi",
        image: "https://italian-feelings.com/wp-content/uploads/2021/03/nuovo_blog_gnocchi-940x752.jpg",
        ingredients: ["Potatoes", "Flour", "Eggs", "Parmesan Cheese", "Salt"],
        description: "Soft, pillowy dumplings made from potatoes, flour, and eggs, often served with a variety of sauces.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Tiramisu",
        image: "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17-500x500.jpg",
        ingredients: ["Mascarpone Cheese", "Eggs", "Sugar", "Coffee", "Cocoa"],
        description: "A popular Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Fettuccine Alfredo",
        image: "https://recipe30.com/wp-content/uploads/2018/07/fettucine-alfredo-authentic.jpg",
        ingredients: ["Fettuccine", "Butter", "Parmesan Cheese", "Cream", "Garlic"],
        description: "A rich pasta dish made with fettuccine tossed in a creamy sauce of butter, Parmesan cheese, cream, and garlic.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Minestrone",
        image: "https://andianne.com/wp-content/uploads/2022/01/turkey-carcass-soup-03.jpg",
        ingredients: ["Vegetables", "Beans", "Tomatoes", "Pasta", "Broth"],
        description: "A hearty Italian soup made with a variety of vegetables, beans, and pasta, simmered in a flavorful broth.",
        cost: "₹450 ($5.63) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Osso Buco",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/osso-bucco1-1646697959.jpg",
        ingredients: ["Veal Shanks", "Carrots", "Celery", "Tomatoes", "White Wine"],
        description: "A Milanese specialty of braised veal shanks cooked with carrots, celery, tomatoes, and white wine, often served with gremolata.",
        cost: "₹800 ($10.00) (Ingredients + Making Fee)"
    }
];
  getdishes3(){
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
