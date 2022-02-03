import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateDataService } from '../Services/navigate.data.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  info:number;
  wunschlistenmenge:number;
  @Output() sidenavClose = new EventEmitter();
  constructor(public navigateData: NavigateDataService, private  router: Router) { }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
  navigatewarenkorb(){
    this.router.navigate(['Warenkorb']);
  }

  navigatehomepage(){
    this.router.navigate(['Home']);
  }

  navigateshop(){
    this.router.navigate(['Shop']);
  }

  navigatekontakt(){
    this.router.navigate(['Kontakt']);
  }

  navigatewunschliste(){
    this.router.navigate(['Wunschliste'])
  }
  navigateproduktsuche(){
    this.router.navigate(['Produktsuche'])
  }
}
