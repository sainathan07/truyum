import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food/item-info/food-item-info.component';
import { FoodMenuComponent } from './food/menu/food-menu/food-menu.component';
import { FoodService } from './food/food.service';
import { FoodSearchComponent } from './food/search/food-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping/cart/shopping-cart.component';
import { MainComponent } from './main/main.component';
import { FoodItemEditComponent } from './food/item-edit/food-item-edit.component';
import { CartService } from './shopping/cart/cart.service';
import { DatePipe } from '@angular/common';
import { SignupComponent } from './site/signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { SignoutComponent } from './site/signout/signout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodMenuComponent,
    FoodSearchComponent,
    ShoppingCartComponent,
    MainComponent,
    FoodItemEditComponent,
    SignupComponent,
    LoginComponent,
    SignoutComponent,
    UserProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FoodService,CartService,DatePipe],
  bootstrap: [MainComponent]
})
export class AppModule { }
