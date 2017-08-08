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
      {"url":"/assets/images_raw/Thailand2.jpg", "caption":"Khao Sok Lake, Thailand"},
      {"url":"/assets/images_raw/Malaysia1.jpg", "caption":"Cameron Highlands, Malaysia"},
      {"url":"/assets/images_raw/Indonesia1.jpg", "caption":"Bukit Lawang, Sumatra, Indonesia"},
      {"url":"/assets/images_raw/Cambodia1.jpg", "caption":"Angkor Wat, Siem Reap, Cambodia"},
      {"url":"/assets/images_raw/Vietnam1.jpg", "caption":"Halong Bay, Vietnam"},
      {"url":"/assets/images_raw/Vietnam3.jpg", "caption":"Hanoi, Vietnam"},
      {"url":"/assets/images_raw/Mongolia1.jpg", "caption":"Mongolia"},
      {"url":"/assets/images_raw/Mongolia2.jpg", "caption":"Mongolia"},
      {"url":"/assets/images_raw/Mongolia3.jpg", "caption":"Lake Khövsgöl, Mongolia"},
      {"url":"/assets/images_raw/Mongolia4.jpg", "caption":"Lake Khövsgöl, Mongolia"},
      {"url":"/assets/images_raw/China1.jpg", "caption":"Great Wall, Beijing, China"},
      {"url":"/assets/images_raw/Taiwan1.jpg", "caption":"Jiufen, Taiwan"},
      {"url":"/assets/images_raw/Taiwan2.jpg", "caption":"Taroko Gorge, Taiwan"},
      {"url":"/assets/images_raw/China2.jpg", "caption":"Terracotta Warriors, Xi'An, China"},
      {"url":"/assets/images_raw/Taiwan3.jpg", "caption":"Hualien Coast, Taiwan"},
      {"url":"/assets/images_raw/Taiwan4.jpg", "caption":"Taipei, Taiwan"},
      {"url":"/assets/images_raw/Japan1.jpg", "caption":"Kyoto, Japan"},
      {"url":"/assets/images_raw/Japan2.jpg", "caption":"Fushimi Inari Shrine, Kyoto, Japan"},
      {"url":"/assets/images_raw/Japan3.jpg", "caption":"Osaka, Japan"},
      {"url":"/assets/images_raw/Taiwan5.jpg", "caption":"Taipei, Taiwan"},
      {"url":"/assets/images_raw/Thailand1.jpg", "caption":"Chiang Mai, Thailand"},
      {"url":"/assets/images_raw/Thailand3.jpg", "caption":"Chiang Mai, Thailand"},
      {"url":"/assets/images_raw/Netherlands1.jpg", "caption":"Amsterdam, Netherlands"},
      {"url":"/assets/images_raw/Netherlands2.jpg", "caption":"Amsterdam, Netherlands"},
      {"url":"/assets/images_raw/Netherlands3.jpg", "caption":"Zaanse Schans, Netherlands"},
      {"url":"/assets/images_raw/Germany1.jpg", "caption":"Berlin, Germany"},
      {"url":"/assets/images_raw/Germany3.jpg", "caption":"Berlin, Germany"},
      {"url":"/assets/images_raw/Czech1.jpg", "caption":"Prague, Czech Republic"},
      {"url":"/assets/images_raw/Germany2.jpg", "caption":"Neuschwanstein Castle, Bavaria, Germany"},
      {"url":"/assets/images_raw/Italy1.jpg", "caption":"The Coliseum, Rome, Italy"},
      {"url":"/assets/images_raw/Italy2.jpg", "caption":"The Vatican, Vatican City, Italy"},
      {"url":"/assets/images_raw/Israel1.jpg", "caption":"The Wailing Wall, Jerusalem, Israel"},
      {"url":"/assets/images_raw/Israel2.jpg", "caption":"Tel Aviv, Israel"},
      {"url":"/assets/images_raw/Greece1.jpg", "caption":"Crete, Greece"},
      {"url":"/assets/images_raw/Spain1.jpg", "caption":"La Sagrada Familia, Barcelona, Spain"},
      {"url":"/assets/images_raw/Spain2.jpg", "caption":"Palma Mallorca, Spain"},
      {"url":"/assets/images_raw/Spain3.jpg", "caption":"The Alhambra, Granada, Spain"},
      {"url":"/assets/images_raw/France1.jpg", "caption":"The Louvre, Paris, France"},
      {"url":"/assets/images_raw/France2.jpg", "caption":"Eiffel Tower, Paris, France"},
      {"url":"/assets/images_raw/Iceland1.jpg", "caption":"Iceland"},
      {"url":"/assets/images_raw/Iceland2.jpg", "caption":"Iceland"},
      {"url":"/assets/images_raw/Iceland3.jpg", "caption":"Iceland"},
      {"url":"/assets/images_raw/Ireland1.jpg", "caption":"Dublin, Ireland"},
      {"url":"/assets/images_raw/England1.jpg", "caption":"London, United Kingdom"},
      {"url":"/assets/images_raw/England2.jpg", "caption":"London, United Kingdom"},
      {"url":"/assets/images_raw/Sweden1.jpg", "caption":"Stockholm, Sweden"},
      {"url":"/assets/images_raw/Sweden2.jpg", "caption":"Sandhamm, Sweden"},
      {"url":"/assets/images_raw/Cuba1.jpg", "caption":"Old Havana, Cuba"},
      {"url":"/assets/images_raw/Cuba2.jpg", "caption":"Central Havana, Cuba"},
      {"url":"/assets/images_raw/Cuba3.jpg", "caption":"Viñales, Cuba"},
      {"url":"/assets/images_raw/PuertoRico2.jpg", "caption":"El Yunque, Puerto Rico"},
      {"url":"/assets/images_raw/CostaRica1.jpg", "caption":"Monteverde, Costa Rica"},
      {"url":"/assets/images_raw/CostaRica2.jpg", "caption":"Monteverde, Costa Rica"},
      {"url":"/assets/images_raw/CostaRica3.jpg", "caption":"Manuel Antonio, Costa Rica"},
      {"url":"/assets/images_raw/Colombia2.jpg", "caption":"Medellin, Colombia"},
      {"url":"/assets/images_raw/Colombia3.jpg", "caption":"Art in Bogota, Cambodia"},
      {"url":"/assets/images_raw/Colombia4.jpg", "caption":"Bogota, Cambodia"},
      {"url":"/assets/images_raw/Mexico1.jpg", "caption":"Chichen Itza, Mexico"},
      {"url":"/assets/images_raw/Mexico2.jpg", "caption":"Cancun, Mexico"},
      {"url":"/assets/images_raw/Mexico3.jpg", "caption":" Valladolid, Mexico"},
      {"url":"/assets/images_raw/SouthKorea1.jpg", "caption":"Seoul, South Korea"},
      {"url":"/assets/images_raw/SouthKorea2.jpg", "caption":"Gyeongbokgung Palace, Seoul, South Korea"}
    ];
  }

}
