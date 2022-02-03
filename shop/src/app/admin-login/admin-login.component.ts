import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  hide = true;
  menge: number;
  user:string ='';
  password: string='';

  constructor(private  router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  navigateshop(){
    this.router.navigate(['Shop']);
  }

  datenpruefung(user: string, passwort: string){
    if(user!='Chrisubis' || passwort != 'chrisubis/hob91?'){
      this.snackBar.open('Falscher Benutzername oder Passwort', '', {
        duration: 3000,
      })
    }
    else if(user === 'Chrisubis' && passwort === 'chrisubis/hob91?') {
      this.router.navigate(['Admin']);
      localStorage.setItem('admin', this.user);
      }
    }

}
