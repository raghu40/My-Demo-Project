import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './common/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Welcome to my Demo Project';
  isDisplayLogin = true;
  showmenu = false
  userName: string;
  user;
   public newdata = new BehaviorSubject({});
  constructor(private authservice: AuthService, private router: Router, private modalService: NgbModal) {
    this.authservice._loginData.subscribe((data) => {
      if (data['valid'] == true) {
        this.isDisplayLogin = false;
        this.userName = 'Welcome ' + data['name'];
      } else {
        this.isDisplayLogin = true;
      }
    });
    this.user = { name : 'JEF', age : 20 };
  }
  logout() {
    this.router.navigate(['/home']);
    this.isDisplayLogin = true;
    this.authservice._loginData.subscribe((data) => {
       data['valid']= false;
       data['name'] = '';
  });
}

showMenu(){
  this.showmenu =  !this.showmenu;
}
openModel(){
    
  const modalRef = this.modalService.open(ModalComponent);
  modalRef.componentInstance.active = this.user;
}
}