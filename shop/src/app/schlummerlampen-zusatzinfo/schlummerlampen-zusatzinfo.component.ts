import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-schlummerlampen-zusatzinfo',
  templateUrl: './schlummerlampen-zusatzinfo.component.html',
  styleUrls: ['./schlummerlampen-zusatzinfo.component.css']
})
export class SchlummerlampenZusatzinfoComponent implements OnInit {

  kategorie: string;
  artikelnummer: string;

  constructor(public DbService: DatenbankService, private router:Router, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.kategorie = this.navigateData.getArtikelKategorie();
    this.artikelnummer = this.navigateData.getArtikelIDLampe();

 }

  navigateHome(){
    this.router.navigate(["Produkte/"+this.kategorie+"/"+this.artikelnummer])
  }
}
