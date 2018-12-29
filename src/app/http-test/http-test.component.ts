import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';

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
    }, (error: Response) => {
      if (error.status === 400) {
        alert(' expected error, post already deleted');
        //this.form.setErrors(error.json());
      } else {
        alert('unexpected error occured');
      }
      console.log(error);
    });
  }

  updatePost (post) {
    this.service.upadatePost(post)
    .subscribe(response => {
      console.log(response);
    }, (error: Response) => {
      if (error.status === 400) {
        alert(' expected error, post already deleted');
        //this.form.setErrors(error.json());
      } else {
        alert('unexpected error occured');
      }
      console.log(error);
    });
  }

  DeletePost (post) {
    this.service.deletePost(post)
    .subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 0);
    }, (error: Response) => {
      if (error instanceof NotFoundError) {
        alert(' expected error, post already deleted');
        //this.form.setErrors(error.json());
      } else {
        alert('unexpected error occured');
      }
      console.log(error);
    });
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    }, (error: Response) => {
      if (error.status === 400) {
        alert(' expected error, post already deleted');
        //this.form.setErrors(error.json());
      } else {
        alert('unexpected error occured');
      }
      console.log(error);
    });
  }

}
