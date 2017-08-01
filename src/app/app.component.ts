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
      {"url":"/assets/images/Colombia1.JPG", "caption":"Bogota, Colombia"},
      {"url":"/assets/images/Cuba1.JPG", "caption":"Old Havana, Cuba"},
      {"url":"/assets/images/Czech1.JPG", "caption":"Prague, Czech Republic"},
      {"url":"/assets/images/England1.JPG", "caption":"London, England"},
      {"url":"/assets/images/France1.JPG", "caption":"Paris, France"},
      {"url":"/assets/images/Germany1.JPG", "caption":"Berlin, Germany"},
      {"url":"/assets/images/Iceland1.JPG", "caption":"Iceland"},
      {"url":"/assets/images/Indonesia1.JPG", "caption":"Bukit Lawang, Sumatra, Indonesia"},
      {"url":"/assets/images/Japan1.JPG", "caption":"Kyoto, Japan"},
      {"url":"/assets/images/England2.JPG", "caption":"London, England"},
      {"url":"/assets/images/China1.JPG", "caption":"Beijing, China"},
      {"url":"/assets/images/Cambodia1.JPG", "caption":"Angkor Wat"},
      {"url":"/assets/images/Spain2.JPG", "caption":"Palma Mallorca, Spain"},
      {"url":"/assets/images/Malaysia1.JPG", "caption":"Cameron Highlands, Malaysia"},
      {"url":"/assets/images/Spain1.JPG", "caption":"Barcelona, Spain"},
      {"url":"/assets/images/SouthKorea1.JPG", "caption":"Seoul, South Korea"},
      {"url":"/assets/images/Thailand1.JPG", "caption":"Chiang Mai, Thailand"},
      {"url":"/assets/images/Vietnam1.JPG", "caption":"Halong Bay, Vietnam"},
      {"url":"/assets/images/PuertoRico1.JPG", "caption":"El Yunque National Rainforest, PR"},
      {"url":"/assets/images/Italy1.JPG", "caption":"Rome, Italy"},
      {"url":"/assets/images/Israel1.JPG", "caption":"Jerusalem, Israel"},
    ];
  }

}
