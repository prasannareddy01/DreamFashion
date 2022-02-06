import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenComponent } from './categories/men/men.component';
import { WomenComponent } from './categories/women/women.component';
import { KidsComponent } from './categories/kids/kids.component';
import { BagComponent } from './bag/bag.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ContactusComponent,
    ProductsComponent,
    AccountComponent,
    CategoriesComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    BagComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
