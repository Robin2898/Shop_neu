import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { NavigateDataService } from '../Services/navigate.data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info:number;
  wunschlistenmenge:number;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router, public navigateData: NavigateDataService) { }

  ngOnInit(): void {
    window.scrollTo(1, 1)
  }
  navigateHome(){
    this.router.navigate(['Home']);
  }
  navigateKontakt(){
    this.router.navigate(['Kontakt']);
  }
  navigateShop(){
    this.router.navigate(['Shop']);
  }
  navigateWarenkorb(){
    this.router.navigate(['Warenkorb']);
  }
  navigatewunschliste(){
    this.router.navigate(['Wunschliste'])
  }
  navigateproduktsuche(){
    this.router.navigate(['Produktsuche'])
  }
  navigateBewertungen(){
    this.router.navigate(['Bewertungsuebersicht'])
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
