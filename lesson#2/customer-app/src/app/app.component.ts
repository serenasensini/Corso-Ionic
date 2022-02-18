import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Homepage', url: '/homepage', icon: 'home' },
    { title: 'Menu', url: '/menu', icon: 'pizza' },
    { title: 'Contact us', url: '/contact-us', icon: 'call' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Info', url: '/info', icon: 'information' },
  ];
  constructor() {}
}
