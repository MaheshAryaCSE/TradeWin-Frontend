import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { CarsComponent } from './properties/cars/cars.component';
import { BikesComponent } from './properties/bikes/bikes.component';
import { MobilesComponent } from './properties/mobiles/mobiles.component';
import { ElectronicsComponent } from './properties/electronics/electronics.component';
import { FashionComponent } from './properties/fashion/fashion.component';
import { FurnitureComponent } from './properties/furniture/furniture.component';
import { JobsComponent } from './properties/jobs/jobs.component';
import { CategoriesComponent } from './properties/categories/categories.component';
import { BooksComponent } from './properties/books/books.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PetsComponent } from './properties/pets/pets.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ServicesComponent } from './properties/services/services.component';
import { PropertiesComponent } from './properties/properties/properties.component';
import { HttpClientModule } from '@angular/common/http';
import { TwoWayComponent } from './two-way/two-way.component';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './properties/product-details/product-details.component';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SampleComponent } from './sample/sample.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './pipe/custom.pipe';
import { FilterPipe } from './pipes/summary.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './userProfile/profile/profile.component';
import { SettingsComponent } from './userProfile/settings/settings.component';
import { UsersComponent } from './userProfile/users/users.component';
import { NotificationsComponent } from './userProfile/notifications/notifications.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarsComponent,
    BikesComponent,
    MobilesComponent,
    ElectronicsComponent,
    FashionComponent,
    FurnitureComponent,
    JobsComponent,
    CategoriesComponent,
    BooksComponent,
    PetsComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    PropertiesComponent,
    TwoWayComponent,
    ProductDetailsComponent,
    CartComponent,
    SampleComponent,
    CustomDirective,
    CustomPipe,
    FilterPipe,
    ContactUsComponent,
    NotFoundComponent,
    ProfileComponent,
    SettingsComponent,
    UsersComponent,
    NotificationsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [ProductService,AuthService,CartService,AuthGuard,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
