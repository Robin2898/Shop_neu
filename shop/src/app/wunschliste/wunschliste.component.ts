import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-wunschliste',
  templateUrl: './wunschliste.component.html',
  styleUrls: ['./wunschliste.component.css']
})
export class WunschlisteComponent implements OnInit {

  menge: number = 1;

  wunschliste: string;

  artikel: Artikel = {id: 0, kategorie:'', produktname:'', zusatzinfo:'', h_x_b_x_l:'', produktinformation:'', produktdetails:'', besonderheiten:'', preis:'', bild:'', bestandsmenge:0, personalisierung:'', menge:0};

  constructor(public DbService: DatenbankService, private router:Router, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.wunschliste = this.navigateData.getwunschliste();
  }

  navigateshop(){
    this.router.navigate(['Shop']);
  }

  navigateWarenkorb(artikel: Artikel){
    this.navigateData.addshopinglist(artikel,this.menge);
    this.router.navigate(['Warenkorb']);
  }

  removeprodukt(wunschliste: Artikel){
    this.navigateData.setwunschliste(wunschliste);
    this.wunschliste = this.navigateData.getwunschliste();
  }

}
