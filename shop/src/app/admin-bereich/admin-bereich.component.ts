import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-bereich',
  templateUrl: './admin-bereich.component.html',
  styleUrls: ['./admin-bereich.component.css']
})
export class AdminBereichComponent implements OnInit {

  constructor(private  router: Router) { }

  user:string;

  ngOnInit(): void {
    this.user = localStorage.getItem('admin');
    this.datenpruefung();
  }

  datenpruefung(){
    if(localStorage.getItem('admin') === null)
    this.router.navigate(['Adminlogin']);
  }

  logout(){
    localStorage.removeItem('admin')
    this.router.navigate(['Adminlogin']);
    }

  navigateshop(){
    this.router.navigate(['Shop']);
  }

  navigateadminbewertungen(){
    this.router.navigate(['Adminbewertungen'])
  }

  navigateadminprodukte(){
    this.router.navigate(['Adminprodukte'])
  }

  navigateadminprodukteerstellen(){
    this.router.navigate(['Adminprodukteerstellen'])
  }

  navigateadminprodukteentfernen(){
    this.router.navigate(['Adminprodukteentfernen'])
  }

  
}