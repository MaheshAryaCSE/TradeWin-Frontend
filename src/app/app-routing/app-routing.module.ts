import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../properties/categories/categories.component';
import { CarsComponent } from '../properties/cars/cars.component';
import { ElectronicsComponent } from '../properties/electronics/electronics.component';
import { FurnitureComponent } from '../properties/furniture/furniture.component';
import { JobsComponent } from '../properties/jobs/jobs.component';
import { MobilesComponent } from '../properties/mobiles/mobiles.component';
import { BooksComponent } from '../properties/books/books.component';
import { BikesComponent } from '../properties/bikes/bikes.component';
import { FashionComponent } from '../properties/fashion/fashion.component';
import { PetsComponent } from '../properties/pets/pets.component';
import { HomeComponent } from '../home/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ServicesComponent } from '../properties/services/services.component';
import { PropertiesComponent } from '../properties/properties/properties.component';
import { TwoWayComponent } from '../two-way/two-way.component';
import { ProductDetailsComponent } from '../properties/product-details/product-details.component';
import { CartComponent } from '../cart/cart.component';
import { AuthGuard } from '../auth.guard';
import { SampleComponent } from '../sample/sample.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProfileComponent } from '../userProfile/profile/profile.component';
import { SettingsComponent } from '../userProfile/settings/settings.component';
import { UsersComponent } from '../userProfile/users/users.component';
import { NotificationsComponent } from '../userProfile/notifications/notifications.component';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'two-way', component: TwoWayComponent },
  { path: 'sample', component: SampleComponent },

  // Admin Access
  { path: 'admin/profile', component: ProfileComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/notifications', component: NotificationsComponent },

  // User Access
  { path: 'user', component: CustomerComponent },
  { path: 'categories', component: CategoriesComponent,
    children: [
      { path: 'cars', component: CarsComponent },
      { path: 'electronics',component: ElectronicsComponent },
      { path: 'furniture', component: FurnitureComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'mobiles', component: MobilesComponent },
      { path: 'books', component: BooksComponent },
      { path: 'bikes', component: BikesComponent },
      { path: 'fashion', component: FashionComponent },
      { path: 'pets', component: PetsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'properties', component: PropertiesComponent }
    ],
  },
  { path: ':product/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  //Admin Access
  
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
