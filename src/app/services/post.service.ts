import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  upadatePost(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(post) {
    return this.http.delete(this.url + '/' + post.id).pipe(catchError((error: Response) => {
      if (error.status === 404) {
        return throwError(new NotFoundError(error));
      }
      return throwError(new AppError(error));
    }));
  }
}
