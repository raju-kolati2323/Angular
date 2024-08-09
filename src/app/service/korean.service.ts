import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dishes } from './dish';

@Injectable({
  providedIn: 'root'
})
export class KoreanService {

  constructor() { }
  dishlist:dishes[]=[
    {
        id: 1,
        dishname: "Kimchi",
        image: "https://th.bing.com/th/id/R.2446b0ed4f166d3f5da9e34f776d94a2?rik=fM18eN4N5Yu8Bg&riu=http%3a%2f%2fwww.maangchi.com%2fwp-content%2fuploads%2f2015%2f06%2fkimchi.jpg&ehk=mjNrVCo%2fNpm%2bWR8ARLTTr40BicW7kph6sZGzZYlFxqQ%3d&risl=&pid=ImgRaw&r=0",
        ingredients: ["Cabbage", "Chili Pepper", "Garlic", "Ginger", "Salt"],
        description: "A traditional Korean side dish of fermented vegetables, typically including cabbage and radishes, seasoned with chili pepper, garlic, ginger, and salt.",
        cost: "₹300 ($3.75) (Ingredients + Making Fee)"
    },
    {
        id: 2,
        dishname: "Bibimbap",
        image: "https://www.thespruceeats.com/thmb/4Dp-1foTVieumGmhq5f8NJyeESw=/3714x2476/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765-hero-01-091c0e0f8c20426d8f70747955efa61d.jpg",
        ingredients: ["Rice", "Vegetables", "Egg", "Beef", "Gochujang"],
        description: "A Korean dish consisting of mixed rice with vegetables, beef, and a fried egg on top, served with gochujang (red chili paste).",
        cost: "₹500 ($6.25) (Ingredients + Making Fee)"
    },
    {
        id: 3,
        dishname: "Bulgogi",
        image: "https://th.bing.com/th/id/R.0a2d8a26672f4024c9c96d05d3c5827d?rik=hTOP3pd39TvmDw&riu=http%3a%2f%2flordbyronskitchen.com%2fwp-content%2fuploads%2f2017%2f08%2fFB-5.jpg&ehk=hLey6U2aB98VWL18h15q0K%2bgWBhyL7WyC3IzRPDTcUs%3d&risl=&pid=ImgRaw&r=0",
        ingredients: ["Beef", "Soy Sauce", "Sugar", "Garlic", "Onions"],
        description: "A Korean dish made of marinated beef grilled or stir-fried, known for its sweet and savory flavors.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 4,
        dishname: "Japchae",
        image: "https://drivemehungry.com/wp-content/uploads/2020/06/japchae-korean-glass-noodles-8.jpg",
        ingredients: ["Sweet Potato Noodles", "Vegetables", "Beef", "Soy Sauce", "Sugar"],
        description: "A Korean noodle dish made with sweet potato noodles, stir-fried with vegetables and meat, flavored with soy sauce and sugar.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 5,
        dishname: "Tteokbokki",
        image: "https://th.bing.com/th/id/OIP.N8c4wiQ-lG8dmhjDHzIDIwHaE7?w=626&h=417&rs=1&pid=ImgDetMain",
        ingredients: ["Rice Cakes", "Eggs", "Gochujang", "Fish Cakes", "Garlic", "Sugar"],
        description: "A popular Korean street food made of chewy rice cakes cooked in a spicy gochujang (red chili paste) sauce with fish cakes and vegetables.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 6,
        dishname: "Samgyeopsal",
        image: "https://images.aws.nestle.recipes/resized/15200ee4846fb9bce4845c815e6e9086_Easy_Pork_Belly_Samgyeopsal__944_531.jpg",
        ingredients: ["Pork Belly", "Garlic", "Lettuce", "Sesame Oil", "Salt"],
        description: "A Korean dish of grilled pork belly, usually served with garlic, sesame oil, and lettuce leaves for wrapping.",
        cost: "₹800 ($10.00) (Ingredients + Making Fee)"
    },
    {
        id: 7,
        dishname: "Kimchi Jjigae",
        image: "https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC_5089.jpg",
        ingredients: ["Kimchi", "Pork", "Tofu", "Gochujang", "Garlic"],
        description: "A Korean stew made with kimchi, pork, tofu, and gochujang (red chili paste), known for its rich and spicy flavor.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 8,
        dishname: "Sundubu Jjigae",
        image: "https://th.bing.com/th/id/OIP.zi-k79sRB34g9TLTZsAFhgHaE7?rs=1&pid=ImgDetMain",
        ingredients: ["Soft Tofu", "Seafood", "Gochujang", "Garlic", "Onions"],
        description: "A spicy Korean stew made with soft tofu, seafood, and vegetables, seasoned with gochujang (red chili paste) and garlic.",
        cost: "₹650 ($8.13) (Ingredients + Making Fee)"
    },
    {
        id: 9,
        dishname: "Haemul Pajeon",
        image: "https://www.koreanbapsang.com/wp-content/uploads/2019/12/DSC3190.jpg",
        ingredients: ["Seafood", "Green Onions", "Flour", "Egg", "Salt"],
        description: "A savory Korean pancake made with a batter of flour and eggs, mixed with seafood and green onions, then pan-fried.",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 10,
        dishname: "Gimbap",
        image: "https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
        ingredients: ["Rice", "Seaweed", "Vegetables", "Egg", "Beef"],
        description: "A Korean dish consisting of cooked rice and various ingredients rolled in seaweed and sliced into bite-sized pieces, similar to sushi rolls.",
        cost: "₹550 ($6.88) (Ingredients + Making Fee)"
    },
    {
        id: 11,
        dishname: "Dakgalbi",
        image: "https://www.koreanbapsang.com/wp-content/uploads/2014/11/DSC_0316-1024x685.jpg",
        ingredients: ["Chicken", "Gochujang", "Cabbage", "Sweet Potatoes", "Rice Cakes"],
        description: "A spicy Korean dish of stir-fried marinated chicken, cooked with vegetables and rice cakes, flavored with gochujang (red chili paste).",
        cost: "₹700 ($8.75) (Ingredients + Making Fee)"
    },
    {
        id: 12,
        dishname: "Galbi",
        image: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4016,w_6016,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_321615734_s2kyph.jpg",
        ingredients: ["Beef Short Ribs", "Soy Sauce", "Garlic", "Sugar", "Sesame Oil"],
        description: "A Korean dish of marinated beef short ribs, grilled or broiled, known for its sweet and savory flavor.",
        cost: "₹800 ($10.00) (Ingredients + Making Fee)"
    },
    {
        id: 13,
        dishname: "Banchan",
        image: "https://spoonuniversity.com/wp-content/uploads/sites/72/2015/10/kimchi.jpg",
        ingredients: ["Various Side Dishes", "Kimchi", "Pickles", "Vegetables", "Fish"],
        description: "A variety of small side dishes served along with cooked rice in Korean cuisine, often including kimchi, pickles, and vegetables.",
        cost: "₹350 ($4.38) (Ingredients + Making Fee)"
    },
    {
        id: 14,
        dishname: "Naengmyeon",
        image: "https://www.maangchi.com/wp-content/uploads/2008/06/mul-naengmyeon.jpg",
        ingredients: ["Buckwheat Noodles", "Beef Broth", "Cucumber", "Egg", "Mustard"],
        description: "A cold Korean noodle dish made with buckwheat noodles served in a chilled beef broth, often topped with sliced cucumbers and a boiled egg.",
        cost: "₹600 ($7.50) (Ingredients + Making Fee)"
    },
    {
        id: 15,
        dishname: "Bossam",
        image: "https://th.bing.com/th/id/OIP.HQLH0xnVd-noJn2ge5dioAHaE8?rs=1&pid=ImgDetMain",
        ingredients: ["Pork Belly", "Cabbage", "Garlic", "Ginger", "Soy Sauce"],
        description: "A Korean dish consisting of boiled pork belly served with cabbage leaves, often accompanied by garlic and a spicy dipping sauce.",
        cost: "₹750 ($9.38) (Ingredients + Making Fee)"
    }
];
  getdishes7(){
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
