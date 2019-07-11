import { Component, OnInit, Renderer, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, AfterViewInit {
  @ViewChild('img_gallery') img_gallery: ElementRef;
  images = [
    { img: "../../assets/photo/marco01.jpg", thumb: "../../assets/photo/marco01.jpg", description: "Marco Seo" },
    { img: "../../assets/photo/sophia01.jpg", thumb: "../../assets/photo/sophia01.jpg", description: "My Lovely Wife Sophia" },
    { img: "../../assets/photo/wedding01.jpg", thumb: "../../assets/photo/wedding01.jpg", description: "Happiest Event In My Life" },
    { img: "../../assets/photo/wedding02.jpg", thumb: "../../assets/photo/wedding02.jpg", description: "Is It Boy or Girl??" },
    { img: "../../assets//photo/ashton01.jpg", thumb: "../../assets//photo/ashton01.jpg", description: "My Son Ashton" },
    { img: "../../assets/photo/ashton02.jpg", thumb: "../../assets/photo/ashton02.jpg", description: "Boy Ashton" },
    { img: "../../assets/photo/ashton03.jpg", thumb: "../../assets/photo/ashton03.jpg", description: "Cute Face" },
    { img: "../../assets/photo/furbaby01.jpg", thumb: "../../assets/photo/furbaby01.jpg", description: "Duke and Lip are waiting for Ashton" },
    { img: "../../assets/photo/furbaby02.jpg", thumb: "../../assets/photo/furbaby02.jpg", description: "Lip is waiting for Ashton" },
    { img: "../../assets/photo/furbaby03.jpg", thumb: "../../assets/photo/furbaby03.jpg", description: "Waiting for Treat!" }
  ];
  constructor(
    private renderer: Renderer,
  ) {

   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    console.log(this.img_gallery);
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}
