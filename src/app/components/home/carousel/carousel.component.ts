import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  slideIndex:any = 1;

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }


  
  // Next/previous controls
  plusSlides(n:any) {
    this.showSlides(this.slideIndex += n);
  }
  
  // Thumbnail image controls
  currentSlide(n:any) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n:any) {
    let i:any;
    let slides:any = document.getElementsByClassName("mySlides");
    let dots:any = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

}
