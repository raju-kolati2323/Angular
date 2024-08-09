import { Injectable } from '@angular/core';
import { category } from './home';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  categorylist:category[]=[
    {
      id:1,
      url:'indian',
      image:'https://theplanetd.com/images/popular-indian-dishes-cuisine.jpg',
      title:'Indian',
    },
    {
      id:2,
      url:'mexican',
      image:'https://th.bing.com/th/id/OIP.pelK9k5ccm6GNDcM6fEozQAAAA?rs=1&pid=ImgDetMain',
      title:'Mexican',
    },
    {
      id:3,
      url:'italian',
      image:'https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg',
      title:'Italian',
    },
    {
      id:4,
      url:'french',
      image:'https://www.mcneillluxurytravel.com/wp-content/uploads/2019/07/AdobeStock-80822562-steak-frites.jpg',
      title:'French',
    },
    {
      id:5,
      url:'chinese',
      image:'https://www.lacademie.com/wp-content/uploads/2022/01/popular-chinese-foods.jpg',
      title:'Chinese',
    },
    {
      id:6,
      url:'japanese',
      image:'https://th.bing.com/th/id/OIP.VT05Zj8-8QELEphviRgh6gHaEo?w=1024&h=640&rs=1&pid=ImgDetMain',
      title:'Japanese',
    },
    {
      id:7,
      url:'korean',
      image:'https://i.pinimg.com/originals/c5/52/6d/c5526d89fb54d469b2a3a94825d5d275.jpg',
      title:'Korean',
    },
    {
      id:8,
      url:'thai',
      image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1621044973/Southeast-Asian-Food-Pad-Thai/Southeast-Asian-Food-Pad-Thai.jpg',
      title:'Thai',
    },
    {
      id:9,
      url:'spanish',
      image:'https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Spanish-Seafood-Paella-1024x536.png',
      title:'Spanish',
    },
  ]
  constructor() { }
  getcategories(){
    return of(this.categorylist);
  }
}
