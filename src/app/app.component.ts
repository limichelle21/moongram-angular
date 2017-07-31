import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moongram';
  subtitle = 'Memories from our first 15 months of marriage around the world.'
  images;

  constructor() {
    this.images = [
      {
      "url":"https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10612717_10156869823030647_6567353093329403340_n.jpg?oh=33ddf056abe7acdc72769076bcfe767f&oe=59FE211B",
      "caption":"Bali, Indonesia"
      },
      {"url":"/assets/images/Colombia1.JPG", "caption":"The View above Bogota, Colombia"},
      {"url":"/assets/images/Cuba1.JPG", "caption":""},
      {"url":"/assets/images/Czech1.JPG", "caption":""},
      {"url":"/assets/images/England1.JPG", "caption":""},
      {"url":"/assets/images/France1.JPG", "caption":""},
      {"url":"/assets/images/Germany1.JPG", "caption":""},
      {"url":"/assets/images/Iceland1.JPG", "caption":""},
      {"url":"/assets/images/Indonesia1.JPG", "caption":""},
      {"url":"/assets/images/Japan1.JPG", "caption":""},
      {"url":"/assets/images/Mongolia1.JPG", "caption":""}

    ];
  }

}
