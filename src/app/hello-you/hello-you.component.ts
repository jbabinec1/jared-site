import { Component, OnInit } from '@angular/core';
import {butterService} from '/Users/Jared/jared-site/src/app/Services/butterCMS.service';


@Component({
  selector: 'app-hello-you',
  template: `
  <h1>Hello World</h1>

  <p>
      Sample Post:
      {{posts? posts.data[0]?.url : 'no posts'}}
  </p>
  `,
  styles: []
})
export class HelloYouComponent implements OnInit {

  posts;
  headlines;

  constructor() { }

  ngOnInit() {
    this.fetchPosts();
  }



  private fetchPosts() {
    butterService.post.list({
            page: 1,
            page_size: 10
        })
        .then((res) => {
            console.log('Content from ButterCMS');
            console.log(res);
            this.posts = res.data;
        });
}
}


