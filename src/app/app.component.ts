import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MapService } from '../service/map-service';

@Component({
  templateUrl: 'app.html',
  providers: [MapService],
})
export class MyApp implements OnInit {
  rootPage: any = TabsPage;
  encoded: any;
  mapService: MapService;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, mapService: MapService) {
    this.mapService = mapService;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  public ngOnInit() {
    this.encoded = this.mapService.encode('1600 Amphitheatre Parkway, Mountain View, CA');
  }
}
