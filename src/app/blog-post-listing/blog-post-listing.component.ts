import { Component, OnInit } from '@angular/core';
import {butterService} from '/Users/Jared/jared-site/src/app/Services/butterCMS.service';


@Component({
  selector: 'app-blog-post-listing',
  templateUrl: './blog-post-listing.component.html',
  styleUrls: ['./blog-post-listing.component.css']
})
export class BlogPostListingComponent implements OnInit {
  public posts: any[];
  public body: any[];

  constructor() { }

  ngOnInit() {
    butterService.post.list({
        page: 1,
        page_size: 10
        
    }).then((res) => {
        this.posts = res.data.data;
        this.body = res.data.body;
    });
}
}


