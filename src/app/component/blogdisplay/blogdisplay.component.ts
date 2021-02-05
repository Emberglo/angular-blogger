import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post'
import { FakedbService } from '../../db/fakedb.service'


@Component({
  selector: 'app-blogdisplay',
  templateUrl: './blogdisplay.component.html',
  styleUrls: ['./blogdisplay.component.css']
})
export class BlogdisplayComponent implements OnInit {

  posts:Post[]

  constructor(private fakedbService:FakedbService) { }

  ngOnInit() {
    this.posts = this.fakedbService.getPosts()
  }

}
