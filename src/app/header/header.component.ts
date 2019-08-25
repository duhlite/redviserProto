import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ModalService } from "../_modal/modal.service";
import { AuthenticationService } from '../_services/authentication.service';
import { User } from "../_models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = true;
  currentUser: User;

  constructor(
    private modalService: ModalService,
    private authenticationService: AuthenticationService,
    private router: Router) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
