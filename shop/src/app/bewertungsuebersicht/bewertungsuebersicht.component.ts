import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { Bewertung } from '../Services/bewertung.model';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';
import { Warenkorb } from '../Services/warenkorb.model';

@Component({
  selector: 'app-bewertungsuebersicht',
  templateUrl: './bewertungsuebersicht.component.html',
  styleUrls: ['./bewertungsuebersicht.component.css']
})
export class BewertungsuebersichtComponent implements OnInit {

  bewertung: Bewertung[];

  warenkorb: Warenkorb[];

  bewertungen: any;

  artikel: Artikel = {id: 0, kategorie:'', produktname:'', zusatzinfo:'', h_x_b_x_l:'', produktinformation:'', produktdetails:'', besonderheiten:'', preis:'', bild:'', bestandsmenge:0, personalisierung:'', menge:0};


  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService,) { }

  ngOnInit(): void {
    this.allefreigegebenenbewertungen();

  }

  navigateBewertungserstellung(){
    this.router.navigate(['Bewertungserstellung'])
  }

  navigateProdukte(elem: Warenkorb){
    this.router.navigate(["Produkte/"+elem.kategorie+"/"+elem.id])
}

async allefreigegebenenbewertungen(){
  await this.DbService.getBewertungen().toPromise().then(data => {
  this.DbService.response = data});
}


}
