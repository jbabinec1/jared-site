import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MainSiteContainerComponent } from './main-site-container/main-site-container.component';
import { HomeComponent } from './home/home.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { HelloYouComponent } from './hello-you/hello-you.component';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppMaterialModule } from './Shared';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {WelcomeService} from './Services/welcome.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    MainSiteContainerComponent,
    HomeComponent,
    ArticleItemComponent,
    HelloYouComponent,
    BlogPostListingComponent,
    BlogPostDetailsComponent,
    FooterComponent,
    AboutComponent,
    SidebarComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    AppMaterialModule,
    
  
  ],
  providers: [WelcomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
