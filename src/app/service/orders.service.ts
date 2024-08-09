import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { order } from './userorder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  allorderlist:order[]=[
    {
      id: 1,
      dishname: "Butter Chicken",
      image: "https://www.simplyrecipes.com/thmb/bzi7NSlU2ttrmNE7TnIcIiVgKIo=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
      cost: "₹500 ($6.25) (Ingredients + Making Fee)",
      username:'Raju',
      address:'Chandanagar',
      payment:'COD',
    },
    {
        id: 2,
        dishname: "Palak Paneer",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/palak-paneer-recipe.jpg",
        cost: "₹400 ($5) (Ingredients + Making Fee)",
        username:'Hari',
        address:'Miyapur',
        payment:'Gpay',
    },
    {
      id: 5,
      dishname: "Spring Rolls",
      image: "https://redhousespice.com/wp-content/uploads/2021/12/spring-rolls-with-dipping-sauces-scaled.jpg",
      cost: "₹600 - ₹1180 ($7.20 - $14.00) (ingredients + making fee)",
      username:'Vivek',
      address:'KPHB',
      payment:'COD',
    },
    {
      id: 4,
      dishname: "Quiche Lorraine",
      image: "https://4.bp.blogspot.com/-45io-Fkb83M/WTVXIFN8quI/AAAAAAAABC4/-ZBYVKjH8EAh-kQIGdEkSBm2P8icvtwjQCLcB/s1600/Quiche-lorraine-1.jpg",
      cost: "₹900 ($11) (Ingredients + Making Fee)",
      username:'Karthik',
      address:'Vizag',
      payment:'COD',
    },
    {
      id: 9,
      dishname: "Okonomiyaki",
      image: "https://cdn.shopify.com/s/files/1/0111/1729/7722/files/pancake-blog-header-image-1570px_480x480.jpg?v=1648665103",
      cost: "₹650 ($8.13) (Ingredients + Making Fee)",
      username:'Akhil',
      address:'Vzm',
      payment:'Gpay',
    },
    {
      id: 12,
      dishname: "Carne Asada",
      image: "https://th.bing.com/th/id/OIP.UQNFdG897F51Uxm7BuG_jQHaFj?rs=1&pid=ImgDetMain",
      cost: "₹650 ($8.13) (Ingredients + Making Fee)",
      username:'Nikhil',
      address:'Miyapur',
      payment:'ApplePay',
    },
    {
      id: 14,
      dishname: "Pad Kra Pao",
      image: "https://tasteasianfood.com/wp-content/uploads/2022/06/Pad-Kra-Pao-featured-image.jpeg",
      cost: "₹500 ($6.25) (Ingredients + Making Fee)",
      username:'Hari2',
      address:'Hyderabad',
      payment:'Paypal',
    },
    {
      id: 10,
      dishname: "Empanadas",
      image: "https://th.bing.com/th/id/OIP.v03e5OQnNmXBxTtRJ9UQRAAAAA?rs=1&pid=ImgDetMain",
      cost: "₹400 ($5.00) (Ingredients + Making Fee)",
      username:'Raju',
      address:'Vizag',
      payment:'Gpay',
    },
  ]
  allorders(){
    return of(this.allorderlist)
  }
}
