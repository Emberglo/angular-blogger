import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../../models/post'
import { FakedbService } from '../../db/fakedb.service'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post:Post

  constructor(
    private route: ActivatedRoute,
    private fakedbService:FakedbService
  ) {}

  ngOnInit() {
    let posts: Post[] = this.fakedbService.getPosts()
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.post = posts.find(p => p.id == id)
  }

}
