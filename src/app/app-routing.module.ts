import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BagComponent } from './bag/bag.component';
import { CategoriesComponent } from './categories/categories.component';
import { KidsComponent } from './categories/kids/kids.component';
import { MenComponent } from './categories/men/men.component';
import { WomenComponent } from './categories/women/women.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent,children:[
    {path:'men',component:MenComponent},
    {path:'women',component:WomenComponent},
    {path:'kids',component:KidsComponent}
  ]},
  {path:'bag',component:BagComponent},
{path:'contactus',component:ContactusComponent},
{path:'account',component:AccountComponent},
{path:'footer',component:FooterComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
