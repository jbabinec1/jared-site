import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloYouComponent } from './hello-you/hello-you.component';
import { BlogPostListingComponent } from './blog-post-listing/blog-post-listing.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path: 'blog', component: BlogPostListingComponent},
  {path: 'home/:slug', component: BlogPostDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'hello-you', component: HelloYouComponent},
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
