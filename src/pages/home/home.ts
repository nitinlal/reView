import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService } from '../../service/map-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  encoded: string | any;
  constructor(public navCtrl: NavController, private mapService: MapService) {

  }

  public ngOnInit() {
    this.mapService.encode('1600 Amphitheatre Parkway, Mountain View, CA')
      .subscribe((res) => this.encoded = JSON.stringify(res));
  }

}
