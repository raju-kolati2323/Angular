import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinaschefComponent } from './joinaschef/joinaschef.component';
import { OrdersComponent } from './orders/orders.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { MexicanComponent } from './mexican/mexican.component';
import { FrenchComponent } from './french/french.component';
import { ChineseComponent } from './chinese/chinese.component';
import { JapaneseComponent } from './japanese/japanese.component';
import { KoreanComponent } from './korean/korean.component';
import { ThaiComponent } from './thai/thai.component';
import { SpanishComponent } from './spanish/spanish.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdddishComponent } from './adddish/adddish.component';
import { ManageComponent } from './manage/manage.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { UserordersComponent } from './userorders/userorders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GetstartedComponent,
    HomeComponent,
    AboutComponent,
    JoinaschefComponent,
    OrdersComponent,
    IndianComponent,
    ItalianComponent,
    MexicanComponent,
    FrenchComponent,
    ChineseComponent,
    JapaneseComponent,
    KoreanComponent,
    ThaiComponent,
    SpanishComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    AdddishComponent,
    ManageComponent,
    UserprofileComponent,
    AdminprofileComponent,
    UserordersComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
