import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-contact',
  templateUrl: './store-contact.component.html',
  styleUrls: ['./store-contact.component.scss']
})
export class StoreContactComponent implements OnInit {
  name;
  organization;
  email;
  message;
  phone;
  country;
  state;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const info = `name: ${this.name}, 
                  organization: ${this.organization},
                  email: ${this.email},
                  phone: ${this.phone},
                  country: ${this.country},
                  state: ${this.state}, 
                  message: ${this.message}`
    alert(info);
  }

}
