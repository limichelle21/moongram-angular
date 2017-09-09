import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Moongram';
subtitle = '15 Months. 31 Countries.';

images;

constructor() {
  this.images = [
    {"url":"/assets/images_raw/Cambodia.jpg", "caption":"Siem Reap, Cambodia"},
    {"url":"/assets/images_raw/China.jpg", "caption":"Beijing, China"},
    {"url":"/assets/images_raw/Colombia.jpg", "caption":"Medellin, Colombia"},
    {"url":"/assets/images_raw/CostaRica.jpg", "caption":"Manuel Antonio, Costa Rica"},
    {"url":"/assets/images_raw/Cuba.jpg", "caption":"Old Havana, Cuba"},
    {"url":"/assets/images_raw/Czech.jpg", "caption":"Prague, Czechia"},
    {"url":"/assets/images_raw/England.jpg", "caption":"London, United Kingdom"},
    {"url":"/assets/images_raw/France.jpg", "caption":"Paris, France"},
    {"url":"/assets/images_raw/Germany.jpg", "caption":"Neuschwanstein Castle, Germany"},
    {"url":"/assets/images_raw/Greece.jpg", "caption":"Crete, Greece"},
    {"url":"/assets/images_raw/HongKong.jpg", "caption":"Hong Kong, Hong Kong"},
    {"url":"/assets/images_raw/Iceland.jpg", "caption":"Detifoss Waterfall, Iceland"},
    {"url":"/assets/images_raw/Indonesia.jpg", "caption":"Bukit Lawang, Indonesia"},
    {"url":"/assets/images_raw/Ireland.jpg", "caption":"Dublin, Ireland"},
    {"url":"/assets/images_raw/Israel.jpg", "caption":"Old Jerusalem, Israel"},
    {"url":"/assets/images_raw/Italy.jpg", "caption":"Rome, Italy"},
    {"url":"/assets/images_raw/Japan.jpg", "caption":"Kyoto, Japan"},
    {"url":"/assets/images_raw/Malaysia.jpg", "caption":"Cameron Highlands, Malaysia"},
    {"url":"/assets/images_raw/Mexico.jpg", "caption":"Chichen Itza, Mexico"},
    {"url":"/assets/images_raw/Mongolia.jpg", "caption":"Terkhiin Tsagaan (White Lake), Mongolia"},
    {"url":"/assets/images_raw/Netherlands.jpg", "caption":"Amsterdam, The Netherlands"},
    {"url":"/assets/images_raw/PalestinianTerritory.JPG", "caption":"Bethlehem, Palestinian Territories"},
    {"url":"/assets/images_raw/PuertoRico.jpg", "caption":"El Yunque, Puerto Rico"},
    {"url":"/assets/images_raw/Singapore.jpg", "caption":"Singapore, Singapore"},
    {"url":"/assets/images_raw/SouthKorea.jpg", "caption":"Seoul, South Korea"},
    {"url":"/assets/images_raw/Spain.jpg", "caption":"Granada, Spain"},
    {"url":"/assets/images_raw/Sweden.jpg", "caption":"Stockholm, Sweden"},
    {"url":"/assets/images_raw/Taiwan.jpg", "caption":"Jiufen, Taiwan"},
    {"url":"/assets/images_raw/Thailand.jpg", "caption":"Chiang Mai, Thailand"},
    {"url":"/assets/images_raw/Turkey.JPG", "caption":"Ephesus, Turkey"},
    {"url":"/assets/images_raw/Vietnam.jpg", "caption":"Halong Bay, Vietnam"}
    ]
  }

}
