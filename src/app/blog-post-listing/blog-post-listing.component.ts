import { Component, OnInit } from '@angular/core';
import {butterService} from '/Users/Jared/jared-site/src/app/Services/butterCMS.service';
import { MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-blog-post-listing',
  templateUrl: './blog-post-listing.component.html',
  styleUrls: ['./blog-post-listing.component.css']
})
export class BlogPostListingComponent implements OnInit {
  public posts: any[];
  public body: any[];
  public created: string;
  public published: string;
  public author: string;

  constructor() { }

  ngOnInit() {
    butterService.post.list({
        page: 1,
        page_size: 10,
        
        
    }).then((res) => {
        this.posts = res.data.data;
        this.body = res.data.body;
        this.created = res.data.created;
        this.published = res.data.published;
        this.author = res.data.author;
        
        /* this.createShort = res.data.created.substring(0, 5); */
    });
}
}


