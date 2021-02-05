import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FakedbService } from '../../db/fakedb.service'
import { Post } from '../../models/post'

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {

  @Input() post: Post

  //NOTE - Is this like extends?
  constructor(private fakedbService:FakedbService) { }

  ngOnInit() {
  }

}
