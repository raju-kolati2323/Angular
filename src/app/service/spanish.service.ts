import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class SpanishService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Paella",
        image: "https://www.simplyrecipes.com/thmb/kuFvxBY8s3avWVIwFrO5G7aws6A=/2000x1334/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-HORIZONTAL-ce4d8fe93ec045c0a868ec065f49800a.jpg",
        ingredients: ["Rice", "Saffron", "Chicken", "Rabbit", "Seafood", "Vegetables"],
        description: "A traditional Spanish rice dish from Valencia, cooked with saffron and a variety of proteins like chicken, rabbit, and seafood.",
        cost: "₹800 ($10.00) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Gazpacho",
        image: "https://th.bing.com/th/id/OIP.QsOP_vE5fFFxQSVlQzwqsgHaE5?rs=1&pid=ImgDetMain",
        ingredients: ["Tomatoes", "Cucumbers", "Peppers", "Garlic", "Onion", "Olive Oil"],
        description: "A cold tomato-based soup originating from Andalusia, perfect for hot summer days.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Tortilla Española",
        image: "https://th.bing.com/th/id/OIP.cgt91YiEepFVFhioOR2LjAHaFj?rs=1&pid=ImgDetMain",
        ingredients: ["Potatoes", "Eggs", "Onion", "Olive Oil"],
        description: "A classic Spanish omelette made with potatoes and onions, served as a tapa or main dish.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Patatas Bravas",
        image: "https://www.thespruceeats.com/thmb/mKF-nBxksi-jyCl2aTRR_hR4Lp8=/6240x4160/filters:fill(auto,1)/spanish-patatas-bravas-recipe-3083718-hero-01-6b6c963b3bca4bbbbe626324e05fd627.jpg",
        ingredients: ["Potatoes", "Tomato Sauce", "Paprika", "Garlic", "Olive Oil"],
        description: "Crispy fried potatoes served with a spicy tomato sauce, commonly enjoyed as a tapa.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Churros",
        image: "https://blog.amigofoods.com/wp-content/uploads/2012/04/spanish-churros.jpg",
        ingredients: ["Flour", "Water", "Salt", "Sugar", "Cinnamon"],
        description: "Deep-fried dough pastries often served with hot chocolate or sugar, popular as a breakfast or dessert.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Jamón Ibérico",
        image: "https://loveincorporated.blob.core.windows.net/contentimages/fullsize/1ae8b107-c43f-4eea-aa6e-42f0fc694fdd-guide-to-jamon-iberico-lead1.jpg",
        ingredients: ["Iberian Ham"],
        description: "A premium cured ham from Spain, known for its rich flavor and marbled fat, often served thinly sliced.",
        cost: "₹1,500 ($18.75) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Pimientos de Padrón",
        image: "https://th.bing.com/th/id/OIP.0Mw8u1JAA74zmMXMps3gRwHaE1?rs=1&pid=ImgDetMain",
        ingredients: ["Padrón Peppers", "Olive Oil", "Salt"],
        description: "Small green peppers from Galicia, fried and sprinkled with salt, with the occasional spicy one among them.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Croquetas",
        image: "https://th.bing.com/th/id/OIP.ZGT0yZwgtLkF2q6sT0kdegHaFK?rs=1&pid=ImgDetMain",
        ingredients: ["Bechamel Sauce", "Ham", "Chicken", "Breadcrumbs"],
        description: "Breaded and fried croquettes filled with creamy bechamel sauce and bits of ham or chicken.",
        cost: "₹450 ($5.63) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Pulpo a la Gallega",
        image: "https://spainfromthecuisine.com/wp-content/uploads/2022/10/Galician-Style-Octopus-recipe.jpg",
        ingredients: ["Octopus", "Potatoes", "Paprika", "Olive Oil", "Salt"],
        description: "A Galician dish featuring boiled octopus served on sliced potatoes, seasoned with paprika and olive oil.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "Empanadas",
        image: "https://th.bing.com/th/id/OIP.v03e5OQnNmXBxTtRJ9UQRAAAAA?rs=1&pid=ImgDetMain",
        ingredients: ["Dough", "Beef", "Onion", "Paprika", "Eggs"],
        description: "Pastries filled with savory ingredients like meat, vegetables, and spices, commonly enjoyed as a snack or meal.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Salmorejo",
        image: "https://blog.amigofoods.com/wp-content/uploads/2020/08/salmorejo-spanish-dish.jpg",
        ingredients: ["Tomatoes", "Bread", "Garlic", "Olive Oil", "Eggs", "Ham"],
        description: "A thicker version of gazpacho from Córdoba, garnished with hard-boiled eggs and Iberian ham.",
        cost: "₹450 ($5.63) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Bacalao al Pil Pil",
        image: "https://www.doitinspain.com/wp-content/uploads/2016/05/bacalao-pil-pil.jpg",
        ingredients: ["Cod", "Garlic", "Olive Oil", "Chili Peppers"],
        description: "A Basque dish made with cod fish cooked in olive oil with garlic and chili peppers, forming a rich sauce.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Fabada Asturiana",
        image: "https://fthmb.tqn.com/82B0_vVnd_WhWf6Ip7F09DehfkI=/960x0/filters:no_upscale()/DSC02260-56d361ff3df78cfb37d302c2.JPG",
        ingredients: ["White Beans", "Chorizo", "Morcilla", "Pork", "Paprika"],
        description: "A hearty bean stew from Asturias, featuring chorizo, morcilla (blood sausage), and pork.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 14,
        dishname: "Calamares a la Romana",
        image: "https://th.bing.com/th/id/OIP.A9y7ffFOxzcowmIhhp46sQHaE8?w=640&h=427&rs=1&pid=ImgDetMain",
        ingredients: ["Squid", "Flour", "Eggs", "Lemon", "Olive Oil"],
        description: "Battered and fried squid rings, often served with a squeeze of lemon as a tapa.",
        cost: "₹450 ($5.63) (Ingredients + Making Fee)"
    },
    {
        id: 15,
        dishname: "Crema Catalana",
        image: "https://th.bing.com/th/id/OIP.kcCer7TXp5g8oexSBFOfvQHaFj?rs=1&pid=ImgDetMain",
        ingredients: ["Milk", "Egg Yolks", "Sugar", "Cinnamon", "Lemon Zest"],
        description: "A Catalan dessert similar to crème brûlée, with a creamy custard base and a caramelized sugar crust.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    }
];
  getdishes9(){
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
