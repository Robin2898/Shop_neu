import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bewertung } from '../Services/bewertung.model';
import { DatenbankService } from '../Services/datenbank.service';

@Component({
  selector: 'app-admin-bereich-bewertungen',
  templateUrl: './admin-bereich-bewertungen.component.html',
  styleUrls: ['./admin-bereich-bewertungen.component.css']
})
export class AdminBereichBewertungenComponent implements OnInit {

  user:string;

  constructor(public DbService: DatenbankService, private  router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('admin');
    this.datenpruefung();
    this.allebewertungen();
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

  navigateadminbereich(){
    this.router.navigate(['Admin'])
  }

  async allebewertungen(){
      await this.DbService.getBewertungspruefung().toPromise().then(data => {
      this.DbService.response = data});
  }

  async uebergabebewertung(elem: Bewertung){
   await (await this.DbService.setBewertungen(elem)).toPromise();
   this.allebewertungen();
  }

  async loeschebewertung(id: number){
    await (await this.DbService.deletebewertungen(id)).toPromise();
    this.allebewertungen();
   }

}
