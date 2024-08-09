import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class MexicanService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Tacos",
        image: "https://th.bing.com/th/id/OIP.pelK9k5ccm6GNDcM6fEozQAAAA?rs=1&pid=ImgDetMain",
        ingredients: ["Tortillas", "Beef", "Onions", "Cilantro", "Cheese"],
        description: "A traditional Mexican dish consisting of small hand-sized tortillas topped with a variety of fillings such as beef, onions, cilantro, and cheese.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Guacamole",
        image: "https://i.pinimg.com/originals/11/27/2f/11272f97a1ae4f51b5258093760ce2c3.jpg",
        ingredients: ["Avocados", "Tomatoes", "Onions", "Lime", "Cilantro"],
        description: "A creamy dip made from mashed avocados, mixed with tomatoes, onions, lime juice, and cilantro, often served with tortilla chips.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Enchiladas",
        image: "https://blog.amigofoods.com/wp-content/uploads/2020/12/mexican-food-enchiladas.jpg",
        ingredients: ["Tortillas", "Chicken", "Cheese", "Chili Sauce", "Spices"],
        description: "Corn tortillas rolled around a filling of chicken and cheese, then covered with chili sauce and baked until hot and bubbling.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Quesadilla",
        image: "https://i.pinimg.com/originals/e6/cd/c2/e6cdc218376cb890562070b9448d481e.jpg",
        ingredients: ["Tortillas", "Cheese", "Chicken", "Peppers", "Onions"],
        description: "A grilled tortilla filled with melted cheese and other ingredients such as chicken, peppers, and onions, folded and served hot.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Chiles Rellenos",
        image: "https://i.pinimg.com/originals/da/96/0f/da960f9ac204694e839ec6d59909844e.jpg",
        ingredients: ["Poblano Peppers", "Cheese", "Tomato Sauce", "Eggs", "Flour"],
        description: "Roasted poblano peppers stuffed with cheese, dipped in egg batter and flour, then fried and served with a tomato sauce.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Tamales",
        image: "https://www.todaysdelight.com/wp-content/uploads/2021/05/mexican-tamales-2684-1200-250k.jpg",
        ingredients: ["Corn Dough", "Meat", "Corn Husks", "Spices", "Sauce"],
        description: "A traditional Mexican dish made of corn dough filled with meat, wrapped in corn husks, and steamed to perfection.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Pozole",
        image: "https://www.mylatinatable.com/wp-content/uploads/2016/03/pozole-2-1024x655.jpg",
        ingredients: ["Hominy", "Pork", "Cabbage", "Radishes", "Lime"],
        description: "A hearty Mexican soup made with hominy and pork, garnished with cabbage, radishes, and lime wedges for added flavor.",
        cost: "₹650 ($8.13) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Mole Poblano",
        image: "https://i.pinimg.com/474x/19/3f/88/193f8819419915b6b90d569b261f75b2--chihuahua-mexico-mexican-mole.jpg",
        ingredients: ["Chicken", "Chili Peppers", "Chocolate", "Spices", "Nuts"],
        description: "A rich and complex sauce made from chili peppers, chocolate, spices, and nuts, typically served over chicken.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Fajitas",
        image: "https://4.bp.blogspot.com/-E9qUqew_6pU/U6A4B4uFtoI/AAAAAAAAAHA/V5uMl3_B9OA/s1600/Fajitas%252C+Mexico.jpg",
        ingredients: ["Beef or Chicken", "Peppers", "Onions", "Tortillas", "Spices"],
        description: "Grilled strips of beef or chicken served with sautéed peppers and onions, wrapped in tortillas with spices for flavor.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "Churros",
        image: "https://assets.bonappetit.com/photos/58ff5f162278cd3dbd2c069c/master/pass/churros.jpg",
        ingredients: ["Flour", "Sugar", "Cinnamon", "Butter", "Oil"],
        description: "A sweet fried dough pastry rolled in cinnamon sugar, often served with a chocolate dipping sauce.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Sopa de Tortilla",
        image: "https://1.bp.blogspot.com/-TJDUzsEXvVI/Xxzgdfra1YI/AAAAAAABE4Y/yvaGLv7u-iw8XpSA55M_Jl4helm4fDIoACLcBGAsYHQ/s2048/107829636_165354651773803_6387957277999966185_n.png",
        ingredients: ["Tortillas", "Tomatoes", "Chicken", "Avocados", "Cheese"],
        description: "A flavorful Mexican soup made with tomatoes, chicken, and tortillas, garnished with avocados and cheese.",
        cost: "₹450 ($5.63) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Carne Asada",
        image: "https://th.bing.com/th/id/OIP.UQNFdG897F51Uxm7BuG_jQHaFj?rs=1&pid=ImgDetMain",
        ingredients: ["Beef", "Lime", "Garlic", "Cilantro", "Spices"],
        description: "Grilled beef marinated with lime juice, garlic, and cilantro, often served sliced in tacos or burritos.",
        cost: "₹650 ($8.13) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Elote",
        image: "https://th.bing.com/th/id/OIP.hClJvCSg8YTEB3e_IcKR7wAAAA?rs=1&pid=ImgDetMain",
        ingredients: ["Corn", "Mayonnaise", "Cheese", "Chili Powder", "Lime"],
        description: "Grilled corn on the cob slathered with mayonnaise, sprinkled with cheese and chili powder, and finished with a squeeze of lime.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 14,
        dishname: "Ceviche",
        image: "https://www.mylatinatable.com/wp-content/uploads/2017/05/Shrimp-Ceviche-Mexican-Style-Ceviche-Recipe-1-1024x772.jpg",
        ingredients: ["Fish", "Lime", "Tomatoes", "Onions", "Cilantro"],
        description: "A refreshing dish made from raw fish cured in lime juice, mixed with tomatoes, onions, and cilantro.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 15,
        dishname: "Tostadas",
        image: "https://th.bing.com/th/id/OIP.iQSp0TEsTri5kTXc91l83QHaE7?rs=1&pid=ImgDetMain",
        ingredients: ["Tortillas", "Beans", "Lettuce", "Cheese", "Sour Cream"],
        description: "Crispy tortillas topped with a variety of ingredients such as beans, lettuce, cheese, and sour cream.",
        cost: "₹400 ($5.00) (Ingredients + Making Fee)"
    }
];
  getdishes2(){
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
