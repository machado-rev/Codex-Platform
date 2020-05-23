import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/dummy-data/blogs';

@Component({
  selector: 'app-employer-blogs',
  templateUrl: './employer-blogs.component.html',
  styleUrls: ['./employer-blogs.component.scss']
})
export class EmployerBlogsComponent implements OnInit {
  blogsType;
  filter;
  showFilter:Boolean;
  blogsToDisplay;

  constructor(public state: ActivatedRoute , public blogsArr: Blogs) { }

  blogs = this.blogsArr.blogsArr;

  ngOnInit(): void {

    this.state.params.subscribe(result => {
      this.filter = result.state;

      if(this.filter == 'approved'){
        this.getApprovedBlogs();
        this.blogsType = 'approved';
      }

      else if(this.filter == 'pending'){
        this.getPendingBlogs();
        this.blogsType = 'pending';
      }

      else{
        this.getAllBlogs();
        this.blogsType = 'all';
      }

    })
  }

  getAllBlogs(){
    this.showFilter = true;
    this.blogsToDisplay = this.blogs;
  }

  getApprovedBlogs(){
    this.showFilter = false;
    this.filterApprovedBlogs();
  }

  getPendingBlogs(){
    this.showFilter = false;
    this.filterPendingBlogs();
  }

  filterAllBlogs(){
    this.blogsToDisplay = [];
    this.blogsType = 'all';
    this.blogsToDisplay = this.blogs;
  }

  filterApprovedBlogs(){
    this.blogsToDisplay = [];
    this.blogsType = 'approved';
    this.blogs.forEach(el => {
      if(el.status == 'approved'){
        this.blogsToDisplay.push(el);
      }
    })
  }
  filterPendingBlogs(){
    this.blogsToDisplay = [];
    this.blogsType = 'pending';
    this.blogs.forEach(el => {
      if(el.status == 'pending'){
        this.blogsToDisplay.push(el);
      }
    })
  }
  filterRejectedBlogs(){
    this.blogsToDisplay = [];
    this.blogsType = 'rejected';
    this.blogs.forEach(el => {
      if(el.status == 'rejected'){
        this.blogsToDisplay.push(el);
      }
    })
  }
}
