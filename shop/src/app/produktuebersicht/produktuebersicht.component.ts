import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../Services/datenbank.service'
import { Router } from '@angular/router'
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-produktuebersicht',
  templateUrl: './produktuebersicht.component.html',
  styleUrls: ['./produktuebersicht.component.css']
})
export class ProduktuebersichtComponent implements OnInit {

  artikelKategorie: string;
  headline: string;

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.artikelKategorie = this.navigateData.getArtikelKategorie();
    this.artikelkategorie(this.artikelKategorie);
    this.headline = this.artikelKategorie;
  }

navigateProdukte(id: number){
  this.router.navigate(["Produkte/"+this.artikelKategorie+"/"+id])
}

navigatekategorien(){
  this.router.navigate(['Kategorien']);
}

navigateHolz(type:string){
  this.navigateData.artikelType(type);
  this.router.navigate(["Produktübersicht"])
}

async artikelkategorie(Artikelkategorie: string){
  switch(Artikelkategorie) { 
    case 'Betonleuchten': { 
      await this.DbService.getBetonlampenProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    } 
    case 'Betonfiguren': { 
      await this.DbService.getBetonProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    } 
    case 'Schlummerlampen': { 
      await this.DbService.getProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    } 
    case 'Holzaufsteller': { 
      await this.DbService.getHolzaufstellerProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    } 
    case 'Kantholz': { 
      await this.DbService.getKantholzProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    } 
    case 'Holzfiguren': { 
      await this.DbService.getHolzfigurenProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    }
    case 'Birkenstammdeko': { 
      await this.DbService.getBirkenstammdekoProdukte().toPromise().then(data => {
        this.DbService.response = data});
       break; 
    }
    case 'Holzschilder': {
      await this.DbService.getHolzschilderProdukte().toPromise().then(data => {
        this.DbService.response = data});
        break;
    }
    case 'Keraminfiguren': {
      await this.DbService.getKeraminfigurenProdukte().toPromise().then(data => {
        this.DbService.response = data});
        break;
    }
    case 'Raysinfiguren': {
      await this.DbService.getRaysinfigurenProdukte().toPromise().then(data => {
        this.DbService.response = data});
        break;
    }
    default: {
      console.log('Es wurde keine passende Auswahl an Produkten gefunden');
      break;
    }
 } ;
}
}
