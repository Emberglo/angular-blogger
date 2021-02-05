import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Post } from '../models/Post'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  blogsUrl: string = 'https://cw-bloggr.herokuapp.com/api'

  //NOTE - must inject http client into constructor
  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.blogsUrl+'/blogs')
  }

  toggleCompleted(post: Post): Observable<any> {
    return this.http.put(this.blogsUrl + '/blogs/' + post.id, post, httpOptions)
  }

  deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.blogsUrl + '/blogs/' + post.id, httpOptions)
  }

  addPost(post: Post):Observable<Post> {
    return this.http.post<Post>(this.blogsUrl+'/blogs', post, httpOptions)
  }

}
