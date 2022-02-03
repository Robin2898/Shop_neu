import { Component, OnInit } from '@angular/core';
import {DatenbankService} from '../Services/datenbank.service'
import {Router} from '@angular/router'
import { NavigateDataService } from '../Services/navigate.data.service';
import { Artikel } from '../Services/artikel.model';
import { Warenkorb } from '../Services/warenkorb.model';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {

  warenkorb: Warenkorb[];
  id: number;
  tempmenge: number;
  gesamt: number;
  numberValue: number;
  numbertest: number;
  test: number;
  testneu: number;
  komplettpreis: string;
  ausgabe: string;

  artikel: Artikel = {id: 0, kategorie:'', produktname:'', zusatzinfo:'', h_x_b_x_l:'', produktinformation:'', produktdetails:'', besonderheiten:'', preis:'', bild:'', bestandsmenge:0, personalisierung:'', menge:0};

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.warenkorb=this.navigateData.getshoppinglist();
    this.testfunction();
    this.gesamtpreis();
  }

  testfunction(){
    if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
      if (this.warenkorb.length === 0){
        this.snackBar.open('Es befinden sich keine Produkte in Ihrem Warenkorb', '', {
          duration: 5000,
        })
    }}
    else if (this.warenkorb === null){
      "Es befinden sich keine Produkte in Ihrem Warenkorb"
      this.snackBar.open('Es befinden sich keine Produkte in Ihrem Warenkorb', '', {
        duration: 5000,
      })
    }
  }

  navigateProdukte(elem: Warenkorb){
    this.router.navigate(["Produkte/"+elem.kategorie+"/"+elem.id])
}

navigateShop(){
  this.router.navigate(['Shop']);
}

bestellabschluss(){
  this.router.navigate(['Bestellabschluss']);
}

gesamtpreis(){
  if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
    this.warenkorb.forEach(elem=>(elem.komplettpreis = parseFloat(elem.preis)*elem.menge))
    this.navigateData.localstorage(this.warenkorb)
    }
    else {
      return 0;
    }
}

removeprodukt(elem: Warenkorb){
    const index: number = this.warenkorb.indexOf(elem);
    if (index !== -1) {
      this.warenkorb.splice(index, 1);
  }
  localStorage.setItem('produkt', JSON.stringify(this.warenkorb));
}

onKey(elem: Warenkorb, menge: number) {
  if(menge > 0 && menge < elem.bestandsmenge){
    elem.komplettpreis = parseFloat((parseFloat(elem.preis)*elem.menge).toFixed(2))
    this.navigateData.localstorage(this.warenkorb)
  }
  else if(menge <=0) {
    this.snackBar.open('Menge nicht möglich. Nur positive Mengen zulässig', '', {
      duration: 3000,
    })
    elem.menge = 1;
    elem.komplettpreis = parseFloat((parseFloat(elem.preis)*elem.menge).toFixed(2))
    this.navigateData.localstorage(this.warenkorb)
    }
    else if(menge > elem.bestandsmenge){
      this.snackBar.open('Bestandsmenge wurde erreicht', '', {
        duration: 3000,
      })
      elem.menge = elem.bestandsmenge;
      elem.komplettpreis = parseFloat((parseFloat(elem.preis)*elem.menge).toFixed(2))
      this.navigateData.localstorage(this.warenkorb)
      this.warenkorb=this.navigateData.getshoppinglist();
    }
  }
}