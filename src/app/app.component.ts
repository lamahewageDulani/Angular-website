import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-site';

navItemsArray: {path: string, label: string, icon: string}[] = [
  {path: '/', label: 'Home', icon: 'home'},
  {path: '/contacts', label: 'Contacts', icon: 'contacts_product'},
  {path: '/newcontact', label: 'New Contact', icon: 'person_add'}
];
}
