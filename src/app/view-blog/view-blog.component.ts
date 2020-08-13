import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss'],
})
export class ViewBlogComponent implements OnInit {
  currentBlog: Blog;
  constructor(
    private activeRoter: ActivatedRoute,
    private blogService: BlogService,
    private _location: Location,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activeRoter.snapshot.paramMap.get('id');
    this.currentBlog = this.blogService.blogs.find((blog) => blog.id === id);
    console.log(this.currentBlog);
  }

  refresh(): void {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }
}
