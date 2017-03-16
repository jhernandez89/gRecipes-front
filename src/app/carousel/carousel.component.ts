import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
    selector: `app-home`,
    template: `<h2>Home</h2>`
})
export class Home { }

@Component({
    selector: `app-about`,
    template: `<h2>About</h2>`
})
export class About { }
