import { Injectable } from '@angular/core';
import { dishes } from './dish';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrenchService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Coq au Vin",
        image: "https://www.traiteurs-resto.fr/wp-content/uploads/2018/10/coq-au-vin.jpeg",
        ingredients: ["Chicken", "Red Wine", "Mushrooms", "Bacon", "Garlic"],
        description: "A classic French dish where chicken is braised slowly with red wine, mushrooms, bacon, and garlic, creating a rich and flavorful stew.",
        cost: "₹1000 ($12) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Bouillabaisse",
        image: "https://i.pinimg.com/originals/fa/a4/48/faa4489db918d9828b2e70408121038e.jpg",
        ingredients: ["Fish", "Seafood", "Tomatoes", "Saffron", "Garlic"],
        description: "A traditional Provençal fish stew made with various kinds of fish and shellfish, simmered with tomatoes, saffron, and garlic.",
        cost: "₹1200 ($15) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Ratatouille",
        image: "https://www.gamberorosso.it/wp-content/uploads/2021/06/ratatouille-scaled.jpeg",
        ingredients: ["Eggplant", "Zucchini", "Tomatoes", "Bell Peppers", "Onions"],
        description: "A vibrant vegetable medley from Provence, consisting of stewed eggplant, zucchini, tomatoes, bell peppers, and onions.",
        cost: "₹800 ($10) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Quiche Lorraine",
        image: "https://4.bp.blogspot.com/-45io-Fkb83M/WTVXIFN8quI/AAAAAAAABC4/-ZBYVKjH8EAh-kQIGdEkSBm2P8icvtwjQCLcB/s1600/Quiche-lorraine-1.jpg",
        ingredients: ["Pastry Crust", "Bacon", "Eggs", "Cream", "Cheese"],
        description: "A savory pie with a flaky pastry crust filled with a custard made from eggs, cream, bacon, and cheese.",
        cost: "₹900 ($11) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Croque Monsieur",
        image: "https://www.oliviascuisine.com/wp-content/uploads/2014/07/croquemonsieur4horizontal.jpg",
        ingredients: ["Bread", "Ham", "Cheese", "Bechamel Sauce", "Butter"],
        description: "A classic French grilled ham and cheese sandwich topped with béchamel sauce, often served with a crisp crust.",
        cost: "₹700 ($9) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Beef Bourguignon",
        image: "https://th.bing.com/th/id/OIP.sfmWnaobp4KQ8CgrGvBnVQHaFj?rs=1&pid=ImgDetMain",
        ingredients: ["Beef", "Red Wine", "Carrots", "Onions", "Mushrooms"],
        description: "A hearty beef stew slowly cooked with red wine, carrots, onions, and mushrooms, originating from the Burgundy region.",
        cost: "₹1100 ($14) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Crepes",
        image: "https://www.nazninskitchen.com/wp-content/uploads/2022/07/French-Pancake-Recipe-Joy-Of-Cooking-1.webp",
        ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar"],
        description: "Thin French pancakes made from a simple batter of flour, milk, eggs, butter, and sugar, served with sweet or savory fillings.",
        cost: "₹600 ($8) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Escargot",
        image: "https://magazine.world-pass.com/wp-content/uploads/2016/05/escargots2.jpg",
        ingredients: ["Snails", "Garlic Butter", "Parsley", "Shallots", "White Wine"],
        description: "A French delicacy consisting of snails cooked in garlic butter, often seasoned with parsley, shallots, and white wine.",
        cost: "₹1300 ($16) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Nicoise Salad",
        image: "https://snippetsofparis.com/wp-content/uploads/2020/09/Salad-nicoise.jpg",
        ingredients: ["Tuna", "Green Beans", "Tomatoes", "Eggs", "Olives"],
        description: "A vibrant salad from the French Riviera, featuring tuna, green beans, tomatoes, eggs, and olives, dressed with olive oil.",
        cost: "₹850 ($11) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "French Onion Soup",
        image: "https://poshjournal.com/wp-content/uploads/2020/10/french-onion-soup-9.jpg",
        ingredients: ["Onions", "Beef Broth", "Cheese", "Bread", "Butter"],
        description: "A comforting soup made from caramelized onions simmered in beef broth, topped with melted cheese and crusty bread.",
        cost: "₹950 ($12) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Duck Confit",
        image: "https://i.pinimg.com/originals/6b/57/2d/6b572dc621ed39eb7c572a13a99cf974.jpg",
        ingredients: ["Duck Legs", "Salt", "Garlic", "Thyme", "Duck Fat"],
        description: "A traditional French dish where duck legs are slowly cooked in their own fat, seasoned with salt, garlic, and thyme, for a tender and flavorful result.",
        cost: "₹1400 ($18) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Moules Marinieres",
        image: "https://cache.marieclaire.fr/data/photo/w2000_ci/62/recettes-moules-marinieres.jpg",
        ingredients: ["Mussels", "White Wine", "Garlic", "Shallots", "Parsley"],
        description: "A simple and delicious dish of mussels steamed in white wine with garlic, shallots, and parsley.",
        cost: "₹950 ($12) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Tarte Tatin",
        image: "https://www.v-kitchen.ch/recipe/3a5d95f4-41de-48e0-8287-9b2b32fa7739.jpg",
        ingredients: ["Flour", "Sugar", "Salt", "Butter"],
        description: "An upside-down caramelized apple tart, baked with a pastry crust and inverted before serving.",
        cost: "₹800 ($10) (Ingredients + Making Fee)"
    }
];
  getdishes4(){
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
