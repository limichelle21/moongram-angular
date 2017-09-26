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
    {
      "url":"/assets/images_raw/Cambodia.jpg",
      "url_thumb": "/assets/images_raw/Cambodia_thumb.jpg",
      "caption":"Siem Reap, Cambodia"
    },
    {
      "url":"/assets/images_raw/China.jpg",
      "url_thumb": "/assets/images_raw/China_thumb.jpg",
      "caption":"Beijing, China"
    },
    {
      "url":"/assets/images_raw/Colombia.jpg",
      "url_thumb": "/assets/images_raw/Colombia_thumb.jpg",
      "caption":"Medellin, Colombia"
    },
    {
      "url":"/assets/images_raw/CostaRica.jpg",
      "url_thumb": "/assets/images_raw/CostaRica_thumb.jpg",
      "caption":"Manuel Antonio, Costa Rica"
    },
    {
      "url":"/assets/images_raw/Cuba.jpg",
      "url_thumb": "/assets/images_raw/Cuba_thumb.jpg",
      "caption":"Old Havana, Cuba"
    },
    {
      "url":"/assets/images_raw/Czech.jpg",
      "url_thumb":"/assets/images_raw/Czech_thumb.jpg",
      "caption":"Prague, Czechia"
    },
    {
      "url":"/assets/images_raw/England.jpg",
      "url_thumb":"/assets/images_raw/England_thumb.jpg",
      "caption":"London, United Kingdom"
    },
    {
      "url":"/assets/images_raw/France.jpg",
      "url_thumb":"/assets/images_raw/France_thumb.jpg",
      "caption":"Paris, France"
    },
    {
      "url":"/assets/images_raw/Germany.jpg",
      "url_thumb":"/assets/images_raw/Germany_thumb.jpg",
      "caption":"Neuschwanstein Castle, Germany"
    },
    {
      "url":"/assets/images_raw/Greece.jpg",
      "url_thumb":"/assets/images_raw/Greece_thumb.jpg",
      "caption":"Crete, Greece"
    },
    {
      "url":"/assets/images_raw/HongKong.jpg",
      "url_thumb":"/assets/images_raw/HongKong_thumb.jpg",
      "caption":"Hong Kong, Hong Kong"
    },
    {
      "url":"/assets/images_raw/Iceland.jpg",
      "url_thumb":"/assets/images_raw/Iceland_thumb.jpg",
      "caption":"Detifoss Waterfall, Iceland"
    },
    {
      "url":"/assets/images_raw/Indonesia.jpg",
      "url_thumb":"/assets/images_raw/Indonesia_thumb.jpg",
      "caption":"Bukit Lawang, Indonesia"
    },
    {
      "url":"/assets/images_raw/Ireland.jpg",
      "url_thumb":"/assets/images_raw/Ireland_thumb.jpg",
      "caption":"Dublin, Ireland"
    },
    {
      "url":"/assets/images_raw/Israel.jpg",
      "url_thumb":"/assets/images_raw/Israel_thumb.jpg",
      "caption":"Old Jerusalem, Israel"
    },
    {
      "url":"/assets/images_raw/Italy.jpg",
      "url_thumb":"/assets/images_raw/Italy_thumb.jpg",
      "caption":"Rome, Italy"
    },
    {
      "url":"/assets/images_raw/Japan.jpg",
      "url_thumb":"/assets/images_raw/Japan_thumb.jpg",
      "caption":"Kyoto, Japan"
    },
    {
      "url":"/assets/images_raw/Malaysia.jpg",
      "url_thumb":"/assets/images_raw/Malaysia_thumb.jpg",
      "caption":"Cameron Highlands, Malaysia"
    },
    {
      "url":"/assets/images_raw/Mexico.jpg",
      "url_thumb":"/assets/images_raw/Mexico_thumb.jpg",
      "caption":"Chichen Itza, Mexico"
    },
    {
      "url":"/assets/images_raw/Mongolia.jpg",
      "url_thumb":"/assets/images_raw/Mongolia_thumb.jpg",
      "caption":"Terkhiin Tsagaan (White Lake), Mongolia"
    },
    {
      "url":"/assets/images_raw/Netherlands.jpg",
      "url_thumb":"/assets/images_raw/Netherlands_thumb.jpg",
      "caption":"Amsterdam, The Netherlands"
    },
    {
      "url":"/assets/images_raw/PalestinianTerritory.JPG",
      "url_thumb":"/assets/images_raw/PalestinianTerritory_thumb.jpg",
      "caption":"Bethlehem, Palestinian Territories"
    },
    {
      "url":"/assets/images_raw/PuertoRico.jpg",
      "url_thumb":"/assets/images_raw/PuertoRico_thumb.jpg",
      "caption":"El Yunque, Puerto Rico"
    },
    {
      "url":"/assets/images_raw/Singapore.jpg",
      "url_thumb":"/assets/images_raw/Singapore_thumb.jpg",
      "caption":"Singapore, Singapore"
    },
    {
      "url":"/assets/images_raw/SouthKorea.jpg",
      "url_thumb":"/assets/images_raw/SouthKorea_thumb.jpg",
      "caption":"Seoul, South Korea"
    },
    {
      "url":"/assets/images_raw/Spain.jpg",
      "url_thumb":"/assets/images_raw/Spain_thumb.jpg",
      "caption":"Granada, Spain"
    },
    {
      "url":"/assets/images_raw/Sweden.jpg",
      "url_thumb":"/assets/images_raw/Sweden_thumb.jpg",
      "caption":"Stockholm, Sweden"
    },
    {
      "url":"/assets/images_raw/Taiwan.jpg",
      "url_thumb":"/assets/images_raw/Taiwan_thumb.jpg",
      "caption":"Jiufen, Taiwan"
    },
    {
      "url":"/assets/images_raw/Thailand.jpg",
      "url_thumb":"/assets/images_raw/Thailand_thumb.jpg",
      "caption":"Chiang Mai, Thailand"
    },
    {
      "url":"/assets/images_raw/Turkey.JPG",
      "url_thumb":"/assets/images_raw/Turkey_thumb.jpg",
      "caption":"Ephesus, Turkey"
    },
    {
      "url":"/assets/images_raw/Vietnam.jpg",
      "url_thumb":"/assets/images_raw/Vietnam_thumb.jpg",
      "caption":"Halong Bay, Vietnam"
    }
    ]
  }

}
