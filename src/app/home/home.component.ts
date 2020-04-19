import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private authService: AuthService ) { }

  ngOnInit() {
  }

  onServerLoad_1(id: number){
    this._router.navigate(['/server', id, 'edit'],
    { queryParams: {allowEdit: 'false'},
      fragment: 'loading'
    });
  }

  // Using Fake Auth Service to implement AuthGuard

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

}
