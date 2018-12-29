import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
      console.log(response);
    });
  }

  updatePost (post) {
    this.service.upadatePost(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  DeletePost (post) {
    this.service.deletePost(post)
    .subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 0);
    });
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });
  }

}
