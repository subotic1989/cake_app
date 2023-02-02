import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { AboutComponent } from './components/about/about.component';
import { TrickComponent } from './components/trick/trick.component';
import { DiscountComponent } from './components/discount/discount.component';
import { NewComponent } from './components/new/new.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoryComponent,
    AboutComponent,
    TrickComponent,
    DiscountComponent,
    NewComponent,
    NewsletterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
