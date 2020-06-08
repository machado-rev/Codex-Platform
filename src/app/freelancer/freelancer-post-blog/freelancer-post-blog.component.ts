import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import imageUpload from 'quill-plugin-image-upload';
@Component({
  selector: 'app-freelancer-post-blog',
  templateUrl: './freelancer-post-blog.component.html',
  styleUrls: ['./freelancer-post-blog.component.scss']
})
export class FreelancerPostBlogComponent implements OnInit {

  image= new FormGroup({
    image:new FormControl(null)
  })

  blog= new FormGroup({
    title:new FormControl(null,{validators:[Validators.required]}),
    image:new FormControl(null,{validators:[Validators.required]}),
    desc:new FormControl(null,{validators:[Validators.required]})
  })
  constructor() { }
  config = {
    imageUpload: {
    upload: file => {
      console.log(file)
      // return a Promise that resolves in a link to the uploaded image
      this.image.patchValue({image:file});
      this.image.get('image').updateValueAndValidity();
      console.log('form hit',this.image.value);
      const imageform = new FormData();
      imageform.append('image',this.image.value.image);
      return new Promise((resolve, reject) => {
        // this.http.post<{imagepath:any}>('https://foreignadmits-api.herokuapp.com/api/addimage',imageform)
        // .subscribe(result=>{
        //   console.log('result hit',result);
        //   resolve(result.imagepath)
        // })
      });
    }
  },
}
  ngOnInit(): void {
    Quill.register('modules/imageUpload', imageUpload);
  }

}
