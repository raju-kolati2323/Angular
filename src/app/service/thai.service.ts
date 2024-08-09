import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class ThaiService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Pad Thai",
        image: "https://th.bing.com/th/id/OIP.bW0SApz6pLf14klNUsRAjQHaHa?rs=1&pid=ImgDetMain",
        ingredients: ["Rice Noodles", "Shrimp", "Tofu", "Peanuts", "Bean Sprouts"],
        description: "A popular Thai stir-fried noodle dish featuring rice noodles, shrimp, tofu, peanuts, and bean sprouts, flavored with tamarind, fish sauce, and lime.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Green Curry",
        image: "https://www.rezeptefuerunterwegs.de/wp-content/uploads/2019/12/AdobeStock_208782133-scaled.jpeg",
        ingredients: ["Coconut Milk", "Green Curry Paste", "Chicken", "Eggplant", "Basil"],
        description: "A fragrant and spicy curry made with green curry paste, coconut milk, chicken, eggplant, and fresh basil.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Tom Yum Soup",
        image: "https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2014/11/Tom-Yum-Soup_10-1-sur-1.jpg",
        ingredients: ["Shrimp", "Lemongrass", "Lime Leaves", "Chili", "Mushrooms"],
        description: "A hot and sour Thai soup with shrimp, lemongrass, lime leaves, chili, and mushrooms, known for its distinctive tangy flavor.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Massaman Curry",
        image: "https://i1.wp.com/spicecravings.com/wp-content/uploads/2018/05/Thai-Massaman-Curry-2.jpg?ssl=1",
        ingredients: ["Beef", "Coconut Milk", "Potatoes", "Peanuts", "Massaman Curry Paste"],
        description: "A rich and mildly spicy curry made with beef, coconut milk, potatoes, peanuts, and massaman curry paste.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Som Tum",
        image: "https://localiseasia.com/wp-content/uploads/2022/03/som-tum_Som-Tum-Thai.jpg",
        ingredients: ["Green Papaya", "Tomatoes", "Peanuts", "Lime", "Chili"],
        description: "A refreshing and spicy salad made from shredded green papaya, tomatoes, peanuts, lime, and chili.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Mango Sticky Rice",
        image: "https://bkkfoodie.com/wp-content/uploads/2020/11/cca10d4c31e1aab0dfc4ae6f8564bcd4.jpg",
        ingredients: ["Mango", "Sticky Rice", "Coconut Milk", "Sugar", "Salt"],
        description: "A sweet Thai dessert consisting of sticky rice served with ripe mango and drizzled with a coconut milk sauce.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Larb",
        image: "https://blog.goodpairdays.com/content/images/2021/02/Depositphotos_257903536_xl-2015.jpg",
        ingredients: ["Ground Meat", "Mint", "Lime", "Fish Sauce", "Chili"],
        description: "A spicy and tangy salad made with ground meat, mint, lime juice, fish sauce, and chili.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Pad See Ew",
        image: "https://th.bing.com/th/id/OIP.nbXIcKibhKlLHwdrDqLlLQHaE7?rs=1&pid=ImgDetMain",
        ingredients: ["Rice Noodles", "Broccoli", "Eggs", "Soy Sauce", "Garlic"],
        description: "Stir-fried rice noodles with broccoli, eggs, soy sauce, and garlic, offering a savory and slightly sweet flavor.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Thai Basil Chicken",
        image: "https://migrationology.smugmug.com/Thai-Recipes/i-4Zcgx5m/0/X3/thai-chicken-basil-recipe-9-X3.jpg",
        ingredients: ["Chicken", "Basil", "Garlic", "Chili", "Fish Sauce"],
        description: "A stir-fried dish featuring chicken, fresh basil, garlic, chili, and fish sauce, known for its aromatic and spicy flavor.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "Panang Curry",
        image: "https://mykitchenuk.com/wp-content/uploads/2022/05/thai-panang-curry.jpeg",
        ingredients: ["Coconut Milk", "Panang Curry Paste", "Chicken", "Peanuts", "Kaffir Lime Leaves"],
        description: "A creamy and slightly spicy curry made with panang curry paste, coconut milk, chicken, peanuts, and kaffir lime leaves.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Tom Kha Gai",
        image: "https://th.bing.com/th/id/R.892bdc4347a2ddbd1a9bd8f188638d7f?rik=4WCc4ZHfy2SfeA&riu=http%3a%2f%2fdaringgourmet.com%2fwp-content%2fuploads%2f2013%2f01%2fTom-Kha-Gai-sm.jpg&ehk=Kp173yid4Sjtl1wuhufrDIJRCrg%2f45YYsZ8sUvqfRlo%3d&risl=&pid=ImgRaw&r=0",
        ingredients: ["Chicken", "Coconut Milk", "Lemongrass", "Galangal", "Lime Leaves"],
        description: "A flavorful Thai soup made with chicken, coconut milk, lemongrass, galangal, and lime leaves, known for its creamy and aromatic qualities.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Red Curry",
        image: "https://th.bing.com/th/id/OIP.Bo0GDQWbn62renO7zjpU-wHaE7?pid=ImgDet&w=474&h=315&rs=1",
        ingredients: ["Coconut Milk", "Red Curry Paste", "Chicken", "Bamboo Shoots", "Basil"],
        description: "A spicy and aromatic curry made with red curry paste, coconut milk, chicken, bamboo shoots, and basil.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Kai Jeow",
        image: "https://th.bing.com/th/id/OIP.n0Xlbdb_5os3ENx4c8MX1AAAAA?rs=1&pid=ImgDetMain",
        ingredients: ["Eggs", "Fish Sauce", "Oil", "Rice", "Chili Sauce"],
        description: "A Thai-style omelette made with eggs, fish sauce, and oil, often served with rice and chili sauce.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 14,
        dishname: "Pad Kra Pao",
        image: "https://tasteasianfood.com/wp-content/uploads/2022/06/Pad-Kra-Pao-featured-image.jpeg",
        ingredients: ["Ground Pork", "Basil", "Garlic", "Chili", "Fish Sauce"],
        description: "A spicy stir-fry made with ground pork, garlic, chili, basil, and fish sauce, typically served with rice.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 15,
        dishname: "Gaeng Daeng",
        image: "https://wfg22p.s3.amazonaws.com/media/dishes/gaeng_daeng_1161-reg.jpg",
        ingredients: ["Chicken", "Red Curry Paste", "Coconut Milk", "Bamboo Shoots", "Basil"],
        description: "A flavorful red curry made with chicken, red curry paste, coconut milk, bamboo shoots, and basil.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    }
];

  getdishes8(){
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
