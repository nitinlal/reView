import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService } from '../../service/map-service';
import * as rxjs from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  encoded$;
  constructor(public navCtrl: NavController, private mapService: MapService) {

  }

  public ngOnInit() {
    this.encoded$ = this.mapService
      .encode('1600 Amphitheatre Parkway, Mountain View, CA');

  }

}
