import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar.component';
import { AddNewItemComponent } from './groceries/add-new-item.component';
import { ListAllItemsComponent } from './groceries/list-all-items.component';
import { RouterModule } from '@angular/router';
import { GroceriesComponent } from './groceries/groceries.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddNewItemComponent,
    ListAllItemsComponent,
    GroceriesComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/groceries', pathMatch: 'full'},
      { path: 'groceries', component: GroceriesComponent },
      { path: 'recipes', component: RecipesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
