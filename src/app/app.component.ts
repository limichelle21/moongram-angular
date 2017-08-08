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
      {"url":"/assets/images/Thailand2.jpg", "caption":"Khao Sok Lake, Thailand"},
      {"url":"/assets/images/Malaysia1.jpg", "caption":"Cameron Highlands, Malaysia"},
      {"url":"/assets/images/Singapore2.jpg", "caption":"Marina Bay Sands, Singapore"},
      {"url":"/assets/images/Indonesia1.jpg", "caption":"Bukit Lawang, Sumatra, Indonesia"},
      {"url":"/assets/images/Cambodia1.jpg", "caption":"Angkor Wat, Siem Reap, Cambodia"},
      {"url":"/assets/images/Vietnam1.jpg", "caption":"Halong Bay, Vietnam"},
      {"url":"/assets/images/Vietnam3.jpg", "caption":"Hanoi, Vietnam"},
      {"url":"/assets/images/Mongolia1.jpg", "caption":"Mongolia"},
      {"url":"/assets/images/Mongolia2.jpg", "caption":"Mongolia"},
      {"url":"/assets/images/Mongolia3.jpg", "caption":"Lake Khövsgöl, Mongolia"},
      {"url":"/assets/images/Mongolia4.jpg", "caption":"Lake Khövsgöl, Mongolia"},
      {"url":"/assets/images/China1.jpg", "caption":"Great Wall, Beijing, China"},
      {"url":"/assets/images/Taiwan1.jpg", "caption":"Jiufen, Taiwan"},
      {"url":"/assets/images/Taiwan2.jpg", "caption":"Taroko Gorge, Taiwan"},
      {"url":"/assets/images/China2.jpg", "caption":"Terracotta Warriors, Xi'An, China"},
      {"url":"/assets/images/Taiwan3.jpg", "caption":"Hualien Coast, Taiwan"},
      {"url":"/assets/images/Taiwan4.jpg", "caption":"Taipei, Taiwan"},
      {"url":"/assets/images/Japan1.jpg", "caption":"Kyoto, Japan"},
      {"url":"/assets/images/Japan2.jpg", "caption":"Fushimi Inari Shrine, Kyoto, Japan"},
      {"url":"/assets/images/Japan3.jpg", "caption":"Osaka, Japan"},
      {"url":"/assets/images/Taiwan5.jpg", "caption":"Taipei, Taiwan"},
      {"url":"/assets/images/Thailand1.jpg", "caption":"Chiang Mai, Thailand"},
      {"url":"/assets/images/Thailand3.jpg", "caption":"Chiang Mai, Thailand"},
      {"url":"/assets/images/Netherlands1.jpg", "caption":"Amsterdam, Netherlands"},
      {"url":"/assets/images/Netherlands2.jpg", "caption":"Amsterdam, Netherlands"},
      {"url":"/assets/images/Netherlands3.jpg", "caption":"Zaanse Schans, Netherlands"},
      {"url":"/assets/images/Germany1.jpg", "caption":"Berlin, Germany"},
      {"url":"/assets/images/Germany3.jpg", "caption":"Berlin, Germany"},
      {"url":"/assets/images/Czech1.jpg", "caption":"Prague, Czech Republic"},
      {"url":"/assets/images/Germany2.jpg", "caption":"Neuschwanstein Castle, Bavaria, Germany"},
      {"url":"/assets/images/Italy1.jpg", "caption":"The Coliseum, Rome, Italy"},
      {"url":"/assets/images/Italy2.jpg", "caption":"The Vatican, Vatican City, Italy"},
      {"url":"/assets/images/Israel1.jpg", "caption":"The Wailing Wall, Jerusalem, Israel"},
      {"url":"/assets/images/Israel2.jpg", "caption":"Tel Aviv, Israel"},
      {"url":"/assets/images/Greece1.jpg", "caption":"Crete, Greece"},
      {"url":"/assets/images/Spain1.jpg", "caption":"La Sagrada Familia, Barcelona, Spain"},
      {"url":"/assets/images/Spain2.jpg", "caption":"Palma Mallorca, Spain"},
      {"url":"/assets/images/Spain3.jpg", "caption":"The Alhambra, Granada, Spain"},
      {"url":"/assets/images/France1.jpg", "caption":"The Louvre, Paris, France"},
      {"url":"/assets/images/France2.jpg", "caption":"Eiffel Tower, Paris, France"},
      {"url":"/assets/images/Iceland1.jpg", "caption":"Iceland"},
      {"url":"/assets/images/Iceland2.jpg", "caption":"Iceland"},
      {"url":"/assets/images/Iceland3.jpg", "caption":"Iceland"},
      {"url":"/assets/images/Ireland1.jpg", "caption":"Dublin, Ireland"},
      {"url":"/assets/images/England1.jpg", "caption":"London, United Kingdom"},
      {"url":"/assets/images/England2.jpg", "caption":"London, United Kingdom"},
      {"url":"/assets/images/Sweden1.jpg", "caption":"Stockholm, Sweden"},
      {"url":"/assets/images/Sweden2.jpg", "caption":"Sandhamm, Sweden"},
      {"url":"/assets/images/Cuba1.jpg", "caption":"Old Havana, Cuba"},
      {"url":"/assets/images/Cuba2.jpg", "caption":"Central Havana, Cuba"},
      {"url":"/assets/images/Cuba3.jpg", "caption":"Viñales, Cuba"},
      {"url":"/assets/images/PuertoRico2.jpg", "caption":"El Yunque, Puerto Rico"},
      {"url":"/assets/images/CostaRica1.jpg", "caption":"Monteverde, Costa Rica"},
      {"url":"/assets/images/CostaRica2.jpg", "caption":"Monteverde, Costa Rica"},
      {"url":"/assets/images/CostaRica3.jpg", "caption":"Manuel Antonio, Costa Rica"},
      {"url":"/assets/images/Colombia2.jpg", "caption":"Medellin, Colombia"},
      {"url":"/assets/images/Colombia3.jpg", "caption":"Art in Bogota, Cambodia"},
      {"url":"/assets/images/Colombia4.jpg", "caption":"Bogota, Cambodia"},
      {"url":"/assets/images/Mexico1.jpg", "caption":"Chichen Itza, Mexico"},
      {"url":"/assets/images/Mexico2.jpg", "caption":"Cancun, Mexico"},
      {"url":"/assets/images/Mexico3.jpg", "caption":" Valladolid, Mexico"},
      {"url":"/assets/images/SouthKorea1.jpg", "caption":"Seoul, South Korea"},
      {"url":"/assets/images/SouthKorea2.jpg", "caption":"Gyeongbokgung Palace, Seoul, South Korea"}
    ];
  }

}
