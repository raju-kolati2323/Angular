import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdddishComponent } from './adddish/adddish.component';
import { ManageComponent } from './manage/manage.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { IndianComponent } from './indian/indian.component';
import { MexicanComponent } from './mexican/mexican.component';
import { ChineseComponent } from './chinese/chinese.component';
import { FrenchComponent } from './french/french.component';
import { ItalianComponent } from './italian/italian.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { KoreanComponent } from './korean/korean.component';
import { SpanishComponent } from './spanish/spanish.component';
import { ThaiComponent } from './thai/thai.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { OrdersComponent } from './orders/orders.component';
import { UserordersComponent } from './userorders/userorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'getstarted',component:GetstartedComponent},
      {path:'home',component:HomeComponent,
        children:[
          {path:'indian',component:IndianComponent},
          {path:'mexican',component:MexicanComponent},
          {path:'chinese',component:ChineseComponent},
          {path:'french',component:FrenchComponent},
          {path:'italian',component:ItalianComponent},
          {path:'japanese',component:JapaneseComponent},
          {path:'korean',component:KoreanComponent},
          {path:'spanish',component:SpanishComponent},
          {path:'thai',component:ThaiComponent},
        ]
      },
      {path:'about',component:AboutComponent},
      {path:'add',component:AdddishComponent},
      {path:'manage',component:ManageComponent},
      {path:'adminprofile',component:AdminprofileComponent},
      {path:'orders',component:OrdersComponent},
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'getstarted',component:GetstartedComponent},
      {path:'home',component:HomeComponent,
        children:[
          {path:'indian',component:IndianComponent},
          {path:'mexican',component:MexicanComponent},
          {path:'chinese',component:ChineseComponent},
          {path:'french',component:FrenchComponent},
          {path:'italian',component:ItalianComponent},
          {path:'japanese',component:JapaneseComponent},
          {path:'korean',component:KoreanComponent},
          {path:'spanish',component:SpanishComponent},
          {path:'thai',component:ThaiComponent},
        ]
      },
      {path:'about',component:AboutComponent},
      {path:'userprofile',component:UserprofileComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'userorders',component:UserordersComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
