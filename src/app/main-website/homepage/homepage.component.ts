import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  singleCarousel = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 5,
    navText: ['<img src="assets/img/icon/prev.svg" style="width:30px;">', '<img src="assets/img/icon/next.svg" style="width:30px;">'],
    items: 1
  }

  constructor(public share: ShareService) { }

  ngOnInit(): void {
  }

}
