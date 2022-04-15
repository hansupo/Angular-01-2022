import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  private url = 'https://postboard-6a141-default-rtdb.europe-west1.firebasedatabase.app/posts.json'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  addPost(products: Post) {
    return this.http.post(this.url, products);
  }

  replacePosts(products: Post[]) {
    return this.http.put(this.url, products);
  }

}
