import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {AppState} from "./app.state";
import {INCREMENT} from "../reducers/school-reducer";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  user$: Observable<string>;
  schoolCounter$: Observable<number>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private store: Store<AppState>) {
    this.initializeApp();
    this.user$ = store.pipe(select('user'));
    this.schoolCounter$ = store.select('schoolCounter');


    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'List', component: ListPage}
    ];

    // update to store on load
    this.store.dispatch({type: INCREMENT});
    store.subscribe((state) => console.log(state.schoolCounter));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
