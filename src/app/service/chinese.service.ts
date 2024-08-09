import { Injectable } from '@angular/core';
import { dishes } from './dish';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChineseService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Sweet and Sour Pork",
        image: "https://th.bing.com/th/id/OIP.Tt-52cYl-7tbnKsWebxjUAHaE8?w=550&h=367&rs=1&pid=ImgDetMain",
        ingredients: ["Pork", "Pineapple", "Bell Peppers", "Vinegar", "Sugar"],
        description: "A popular Chinese dish featuring crispy fried pork in a vibrant sweet and tangy sauce, often served with pineapple and bell peppers.",
        cost: "₹635 - ₹1235 ($7.50 - $14.60) (ingredients + making fee)"
    },
    {
        id: 2,
        dishname: "Kung Pao Chicken",
        image: "https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-15-1200x929.jpg",
        ingredients: ["Chicken", "Peanuts", "Chili Peppers", "Garlic", "Soy Sauce"],
        description: "A spicy, stir-fried Chinese dish made with chicken, peanuts, and vegetables, flavored with chili peppers and garlic.",
        cost: "₹650 - ₹1250 ($7.75 - $15.00) (ingredients + making fee)"
    },
    {
        id: 3,
        dishname: "Peking Duck",
        image: "https://img1.wsimg.com/isteam/ip/e3cfd388-9502-48f4-abcc-2686f01ad9df/20081125202525652_2.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true",
        ingredients: ["Duck", "Scallions", "Cucumber", "Hoisin Sauce", "Pancakes"],
        description: "A famous Chinese dish from Beijing featuring roast duck with crispy skin, served with pancakes, hoisin sauce, and vegetables.",
        cost: "₹1300 - ₹2000 ($15.50 - $24.00) (ingredients + making fee)"
    },
    {
        id: 4,
        dishname: "Mapo Tofu",
        image: "https://cookingwithdog.com/wp-content/uploads/2017/04/mapo-tofu-00.jpg",
        ingredients: ["Tofu", "Ground Pork", "Chili Bean Paste", "Garlic", "Sichuan Peppercorns"],
        description: "A spicy and flavorful dish from Sichuan province made with tofu, ground pork, and a spicy bean paste, known for its numbing heat.",
        cost: "₹620 - ₹1200 ($7.50 - $14.20) (ingredients + making fee)"
    },
    {
        id: 5,
        dishname: "Spring Rolls",
        image: "https://redhousespice.com/wp-content/uploads/2021/12/spring-rolls-with-dipping-sauces-scaled.jpg",
        ingredients: ["Flour Wrappers", "Cabbage", "Carrots", "Pork", "Soy Sauce"],
        description: "Crispy, deep-fried rolls filled with a mixture of vegetables and meat, often served as an appetizer or snack.",
        cost: "₹600 - ₹1180 ($7.20 - $14.00) (ingredients + making fee)"
    },
    {
        id: 6,
        dishname: "Dim Sum",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/160325033254-hk-dim-sum-fook-lam-moon.jpg",
        ingredients: ["Various Small Dishes", "Shrimp", "Pork", "Vegetables", "Dumplings"],
        description: "A Cantonese meal made up of a variety of small, savory dishes and dumplings, traditionally enjoyed with tea.",
        cost: "₹700 - ₹1350 ($8.40 - $16.00) (ingredients + making fee)"
    },
    {
        id: 7,
        dishname: "Hot and Sour Soup",
        image: "https://www.marionskitchen.com/wp-content/uploads/2019/02/10-minute-Hot-Sour-Soup-3-e1552634823281.jpg",
        ingredients: ["Tofu", "Pork", "Mushrooms", "Vinegar", "Pepper"],
        description: "A Chinese soup that is both spicy and tangy, made with tofu, meat, and a variety of vegetables and spices.",
        cost: "₹600 - ₹1180 ($7.20 - $14.00) (ingredients + making fee)"
    },
    {
        id: 8,
        dishname: "Chow Mein",
        image: "https://simple-veganista.com/wp-content/uploads/2014/04/tempeh-chow-mein-recipe-10-360x360.jpg",
        ingredients: ["Egg Noodles", "Chicken", "Vegetables", "Soy Sauce", "Garlic"],
        description: "A stir-fried noodle dish with vegetables and meat, typically made with egg noodles and seasoned with soy sauce.",
        cost: "₹620 - ₹1200 ($7.50 - $14.20) (ingredients + making fee)"
    },
    {
        id: 9,
        dishname: "Fried Rice",
        image: "https://dailyanytime.com/recipes/wp-content/uploads/2016/04/Chinese-Fried-Rice-with-Sauce.jpg",
        ingredients: ["Rice", "Eggs", "Vegetables", "Soy Sauce", "Chicken or Shrimp"],
        description: "A versatile Chinese dish made with stir-fried rice, eggs, vegetables, and often meat or seafood, seasoned with soy sauce.",
        cost: "₹620 - ₹1200 ($7.50 - $14.20) (ingredients + making fee)"
    },
    {
        id: 10,
        dishname: "Char Siu",
        image: "https://i.pinimg.com/736x/6f/25/ae/6f25aed3f46ba7a3c123604405408503.jpg",
        ingredients: ["Pork", "Hoisin Sauce", "Honey", "Soy Sauce", "Five-Spice Powder"],
        description: "A Cantonese barbecue pork dish known for its sweet, savory glaze and distinct red color, often served with rice.",
        cost: "₹650 - ₹1250 ($7.75 - $15.00) (ingredients + making fee)"
    },
    {
        id: 11,
        dishname: "Wonton Soup",
        image: "https://4.bp.blogspot.com/-g2T99ZOs1zc/VTYtIdUSCYI/AAAAAAAAAcU/Bw6iFjcjq34/s1600/wonton-soup.jpg",
        ingredients: ["Wontons", "Pork", "Shrimp", "Chicken Broth", "Green Onions"],
        description: "A comforting Chinese soup made with delicate wontons filled with pork and shrimp, served in a flavorful chicken broth.",
        cost: "₹650 - ₹1250 ($7.75 - $15.00) (ingredients + making fee)"
    },
    {
        id: 12,
        dishname: "General Tso's Chicken",
        image: "https://th.bing.com/th/id/OIP.AmFyukRiS5Pgbj7gfuaWiQHaHa?w=480&h=480&rs=1&pid=ImgDetMain",
        ingredients: ["Chicken", "Soy Sauce", "Garlic", "Ginger", "Chili Peppers"],
        description: "A popular Chinese-American dish of battered and fried chicken pieces tossed in a sweet and spicy sauce.",
        cost: "₹650 - ₹1250 ($7.75 - $15.00) (ingredients + making fee)"
    },
    {
        id: 13,
        dishname: "Sichuan Hotpot",
        image: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/sichuan-hotpot-spicy-951480.jpg",
        ingredients: ["Beef", "Tofu", "Vegetables", "Chili Oil", "Sichuan Peppercorns"],
        description: "A communal dining experience where diners cook various ingredients in a spicy and numbing broth, using chili oil and Sichuan peppercorns.",
        cost: "₹1300 - ₹2000 ($15.50 - $24.00) (ingredients + making fee)"
    },
    {
        id: 14,
        dishname: "Egg Foo Young",
        image: "https://cicili.tv/wp-content/uploads/IMG_7718.jpg",
        ingredients: ["Eggs", "Bean Sprouts", "Shrimp or Pork", "Soy Sauce", "Green Onions"],
        description: "A Chinese-style omelette filled with vegetables and meat, often topped with a savory brown sauce.",
        cost: "₹620 - ₹1200 ($7.50 - $14.20) (ingredients + making fee)"
    },
    {
        id: 15,
        dishname: "Lemon Chicken",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/04/Chinese-Lemon-Chicken-1.jpg",
        ingredients: ["Chicken", "Lemon", "Sugar", "Cornstarch", "Garlic"],
        description: "A Chinese-American dish featuring crispy chicken pieces coated in a sweet and tangy lemon sauce.",
        cost: "₹650 - ₹1250 ($7.75 - $15.00) (ingredients + making fee)"
    }
];
 getdishes5(){
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
