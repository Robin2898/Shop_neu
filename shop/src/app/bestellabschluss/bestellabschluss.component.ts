import { Component, OnInit } from '@angular/core';
import {DatenbankService} from '../Services/datenbank.service'
import {Router} from '@angular/router'
import { NavigateDataService } from '../Services/navigate.data.service';
import { Artikel } from '../Services/artikel.model';
import { Warenkorb } from '../Services/warenkorb.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Adresse } from '../Services/adresse.model';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';


@Component({
  selector: 'app-bestellabschluss',
  templateUrl: './bestellabschluss.component.html',
  styleUrls: ['./bestellabschluss.component.css']
})

export class BestellabschlussComponent implements OnInit {


  abschluss: Warenkorb[];
  warenkorb: Warenkorb[];
  id: number;
  tempmenge: number;
  vorname: string;
  komplettpreis: number=0;
  test:any;
  versandkostenpreis:number;
  summe:number;
  summepreis:number;

  artikel: Artikel = {id: 0, kategorie:'', produktname:'', zusatzinfo:'', h_x_b_x_l:'', produktinformation:'', produktdetails:'', besonderheiten:'', preis:'', bild:'', bestandsmenge:0, personalisierung:'', menge:0};

  adresse: Adresse = {anrede:"", vorname:"", nachname:"", adresse:"", email:"", adresszusatz:"", plz:"", stadt:"", land:"", notiz:""}

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.abschluss=this.navigateData.getshoppinglist();
    this.gesamtpreis();
    this.versandkosten();
    this.zwischensumme();
  }

  wertenichtleer(adresse: Adresse){
    if (adresse.anrede==="" || adresse.vorname==="" || adresse.nachname==="" || adresse.adresse==="" && adresse.adresszusatz==="" || adresse.email==="" || adresse.stadt==="" || adresse.land==="" && adresse.notiz===""){
      this.snackBar.open('Es müssen alle Pflichtfelder ausgefüllt werden!', '', {
        duration: 3000,
      });
  }
  else {
    this.navigatezusammenfassung();
  }
}

  navigateProdukte(elem: Warenkorb){
    this.router.navigate(["Produkte/"+elem.kategorie+"/"+elem.id])
}
    
  navigateShop(){
    this.router.navigate(['Shop']);
    }

  navigatewarenkorb(){
    this.router.navigate(['Warenkorb'])
  }

  navigateversand(){
    this.router.navigate(['Versand']);
  }

  navigatezusammenfassung(){
    this.navigateData.setadresse(this.adresse);
    this.router.navigate(['Bestellzusammenfassung'])
  }

  gesamtpreis(){
    if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
      this.abschluss.forEach(elem=>(this.komplettpreis+=elem.komplettpreis));
      }
      else {
        return 0;
      }
  }

  zwischensumme(){
    this.summepreis = this.komplettpreis;
    this.summe = this.summepreis+this.versandkostenpreis
    // this.navigateData.bezahlpreis(this.summe);
  }

  versandkosten(){
    if(this.komplettpreis > 0.0 && this.komplettpreis < 50.0){
      this.versandkostenpreis = 5.00
    }
    else if(this.komplettpreis > 50.0){
      this.versandkostenpreis = 0.00
    }
    else if(this.komplettpreis === 0.0){
      this.versandkostenpreis = 0.00
    }
  }
}