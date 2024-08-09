import { Injectable } from '@angular/core';
import { dishes } from './dish';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndianService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Butter Chicken",
        image: "https://www.simplyrecipes.com/thmb/bzi7NSlU2ttrmNE7TnIcIiVgKIo=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg",
        ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"],
        description: "Butter Chicken is a rich and creamy dish made with tender chicken cooked in a spiced tomato and butter sauce, often enjoyed with naan or rice.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Palak Paneer",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/palak-paneer-recipe.jpg",
        ingredients: ["Paneer", "Spinach", "Onions", "Tomatoes", "Spices"],
        description: "Palak Paneer is a vegetarian dish consisting of paneer cubes simmered in a smooth spinach gravy, flavored with aromatic spices.",
        cost: "₹400 ($5) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Chicken Biryani",
        image: "https://th.bing.com/th/id/OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7?rs=1&pid=ImgDetMain",
        ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
        description: "Biryani is a fragrant rice dish cooked with layers of marinated chicken, caramelized onions, and a blend of spices, often served with raita.",
        cost: "₹550 ($6.85) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Masala Dosa",
        image: "https://foodiewish.com/wp-content/uploads/2020/05/Masala-Dosa-Recipe.jpg",
        ingredients: ["Rice", "Lentils", "Potatoes", "Onions", "Spices"],
        description: "Masala Dosa is a popular South Indian crispy crepe made from fermented rice and lentil batter, filled with spicy mashed potatoes.",
        cost: "₹350 ($4.35) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Chole Bhature",
        image: "https://3.bp.blogspot.com/-rwTaOMECZlc/UA7x3jk-ZrI/AAAAAAAART0/9nOMWQYczko/s1600/cb+b+masala+one.jpg",
        ingredients: ["Chickpeas", "Flour", "Spices", "Onions", "Tomatoes"],
        description: "Chole Bhature is a classic North Indian dish featuring spicy chickpeas (chole) served with deep-fried bread (bhature).",
        cost: "₹400 ($5) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Rogan Josh",
        image: "https://th.bing.com/th/id/OIP.WP2LHf46Vv9ud4bQa_hX-gHaGl?rs=1&pid=ImgDetMain",
        ingredients: ["Mutton", "Yogurt", "Spices", "Onions", "Garlic"],
        description: "Rogan Josh is a flavorful Kashmiri curry made with tender mutton cooked in a yogurt-based sauce, infused with aromatic spices.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Samosa",
        image: "https://foodiewish.com/wp-content/uploads/2020/03/Samosa-foodiewish.jpg",
        ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"],
        description: "Samosa is a popular Indian snack, consisting of a crispy pastry filled with spiced potatoes and peas, usually deep-fried to golden perfection.",
        cost: "₹200 ($2.50) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Dal Tadka",
        image: "https://feastwithsafiya.com/wp-content/uploads/2021/10/dal-tadka.jpg",
        ingredients: ["Lentils", "Tomatoes", "Onions", "Spices", "Ghee"],
        description: "Dal Tadka is a comforting dish made with lentils cooked in a flavorful tomato and onion gravy, finished with a ghee tempering of spices.",
        cost: "₹350 ($4.35) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Aloo Gobi",
        image: "https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",
        ingredients: ["Potatoes", "Cauliflower", "Spices", "Onions", "Tomatoes"],
        description: "Aloo Gobi is a dry curry made with potatoes and cauliflower, cooked with onions, tomatoes, and a blend of spices.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "Rasmalai",
        image: "https://1.bp.blogspot.com/-McpszkFtg-w/XxRyCm1aPvI/AAAAAAAABR8/xq-murKQgboiYGDGt3PfKTA2--x4U0PCwCLcBGAsYHQ/w495-h500/Rasmalai.jpg",
        ingredients: ["Milk", "Sugar", "Water", "Dry fruits", "Lemon"],
        description: "Rasmalai is a soft spongy steamed dumpling soaked in clotted cream and flavored with cardamom, saffron, and pistachios.",
        cost: "₹250 ($3.25) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Chicken Tikka",
        image: "https://bing.com/th?id=OSK.e2e32c6140523a7ca3ea4f9047c4b204",
        ingredients: ["Chicken", "Yogurt", "Cream", "Onions", "Tomatoes", "Spices", "Nuts"],
        description: "Chicken Tikka is traditionally small pieces of boneless chicken baked over charcoal after marinating in Indian spices and dahi.",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Veg Manchurian",
        image: "https://i.pinimg.com/736x/b5/77/97/b57797fb70d3289daa6adc5908008b6d.jpg",
        ingredients: ["Tomato", "Cabbage", "Carrot", "Cornflour", "Vinegar", "Garlic", "Chili Peppers", "Spices"],
        description: "Veg Manchurian is a popular Indo-Chinese dish made from a combination of shredded vegetables formed into balls.",
        cost: "₹400 ($5) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Pav Bhaji",
        image: "https://i0.wp.com/healthyvegrecipes.com/wp-content/uploads/2016/08/pb1.jpg?resize=570%2C530",
        ingredients: ["Mixed Vegetables", "Potatoes", "Spices", "Butter", "Bread"],
        description: "Pav Bhaji is a popular street food dish made with a spicy mixed vegetable mash served with buttery bread rolls.",
        cost: "₹350 ($4.35) (Ingredients + Making Fee)"
    },
    {
        id: 14,
        dishname: "Idli",
        image: "https://static.toiimg.com/photo/68631114.cms",
        ingredients: ["Rice", "Lentils", "Spices", "Coconut", "Water"],
        description: "Idli is a traditional South Indian breakfast dish made with steamed rice and lentil cakes, often served with coconut chutney and sambar.",
        cost: "₹250 ($3.25) (Ingredients + Making Fee)"
    },
    {
        id: 15,
        dishname: "Rasgulla",
        image: "https://th.bing.com/th/id/OIP.mDroT-KJcs4gFtpduyf3yQHaHa?rs=1&pid=ImgDetMain",
        ingredients: ["Milk", "Sugar", "Cardamom", "Lemon Juice", "Water"],
        description: "Rasgulla is a classic Bengali dessert made with soft and spongy milk dumplings soaked in a light sugar syrup, flavored with cardamom.",
        cost: "₹200 ($2.50) (Ingredients + Making Fee)"
    }
];
  getdishes1(){
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
