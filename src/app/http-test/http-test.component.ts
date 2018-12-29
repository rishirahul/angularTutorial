import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  posts: any;
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
    });
  }

  ngOnInit() {
  }

}
