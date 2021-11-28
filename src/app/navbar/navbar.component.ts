import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navRoutes: any[] = [
    { route: '', name: 'Home Page'},
    { route: 'chat', name: 'Chat Room'}, 
    { route: 'getChannels', name: 'Channels Room'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
