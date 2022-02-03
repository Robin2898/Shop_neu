import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-admin-produkte-erstellen',
  templateUrl: './admin-produkte-erstellen.component.html',
  styleUrls: ['./admin-produkte-erstellen.component.css']
})
export class AdminProdukteErstellenComponent implements OnInit {

  anredem: string;
  anredew: string;
  anreded: string;
  anredeneu: string;

  artikel: Artikel = { kategorie: '', produktname: '', zusatzinfo: '', h_x_b_x_l: '', produktinformation: '', produktdetails: '', besonderheiten: '', preis: '', bild: '', bestandsmenge: null, personalisierung: '', menge: 0 };

  constructor(private  router: Router, private navigateData: NavigateDataService, public DbService: DatenbankService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  wertenichtleer(artikel: Artikel){
    if ( artikel.kategorie==="" || artikel.produktname==="" || artikel.h_x_b_x_l==="" || artikel.produktinformation==="" || artikel.produktdetails==="" || artikel.besonderheiten==="" || artikel.preis==="" || artikel.bild==="" || artikel.bestandsmenge===null || artikel.menge===null){
      this.snackBar.open('Es müssen alle Pflichtfelder ausgefüllt werden!', '', {
        duration: 3000,
      });
  }
  else {
    this.artikelkategorie(artikel)
    this.snackBar.open('Das Produkt wurde dem Shop hinzugefügt', '', {
      duration: 3000,
    });

  }
}

async artikelkategorie(artikel: Artikel) {
  switch (artikel.kategorie) {
    case 'Betonleuchten': {
      await this.DbService.setneueartikelbetonlampen(this.artikel).toPromise();
      break;
    }
    case 'Betonfiguren': {
      await this.DbService.setneueartikelbetonfiguren(this.artikel).toPromise();
      break;
    }
    case 'Schlummerlampen': {
      await this.DbService.setneueartikelschlummerlampen(this.artikel).toPromise();
      break;
    }
    case 'Holzaufsteller': {
      await this.DbService.setneueartikelholzaufsteller(this.artikel).toPromise();
      break;
    }
    case 'Kantholz': {
      await this.DbService.setneueartikelkantholz(this.artikel).toPromise();
      break;
    }
    case 'Holzfiguren': {
      await this.DbService.setneueartikelholzfiguren(this.artikel).toPromise();
      break;
    }
    case 'Birkenstammdeko': {
      await this.DbService.setneueartikelbirkenstammdeko(this.artikel).toPromise();
      break;
    }
    case 'Holzschilder': {
      await this.DbService.setneueartikelholzschilder(this.artikel).toPromise();
      break;
    }
    default: {
      console.log('Es wurde keine passende Auswahl an Produkten gefunden');
      break;
    }
  };
  this.artikel={kategorie: '', produktname: '', zusatzinfo: '', h_x_b_x_l: '', produktinformation: '', produktdetails: '', besonderheiten: '', preis: '', bild: '', bestandsmenge: null, personalisierung: '', menge: 0 }
}
}