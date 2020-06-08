import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const likeBtn = document.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
      
      likeBtn.classList.toggle('active')
      if(likeBtn.classList.contains("active")){
        document.querySelector(".like-text").textContent = "Unlike Blog"
      }
      else{
        document.querySelector(".like-text").textContent = "Like Blog"
      }
    });
   
  }

}
