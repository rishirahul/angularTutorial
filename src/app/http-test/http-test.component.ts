import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post);
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
