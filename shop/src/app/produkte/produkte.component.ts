import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { Warenkorb } from '../Services/warenkorb.model';
import { DatenbankService } from '../Services/datenbank.service'
import { NavigateDataService } from '../Services/navigate.data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css']
})
export class ProdukteComponent implements OnInit {
  response: any;
  href: string = "";
  id: number;
  menge: number = 1;
  editButtonsDisabled: boolean;

  wunschliste: boolean;

  warenkorb: Warenkorb[];

  artikel: Artikel = { id: 0, kategorie: '', produktname: '', zusatzinfo: '', h_x_b_x_l: '', produktinformation: '', produktdetails: '', besonderheiten: '', preis: '', bild: '', bestandsmenge: 0, personalisierung: '', menge: 0 };

  artikelarray: Artikel[] = [];

  constructor(public DbService: DatenbankService, private router: Router, private navigateData: NavigateDataService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getidfromurl();
    this.artikelkategorie(this.navigateData.getArtikelKategorie());
    this.artikelid();
  }


  getidfromurl() {
    this.href = this.router.url.split('/').pop()
    this.id = Number(this.href)
  }

  artikelid() {
    this.navigateData.artikelID(this.id)
  }

  navigateHome(artikel: Artikel) {
    this.router.navigate(["Produktübersicht/" + artikel.kategorie]);
  }


  navigateWarenkorb() {
    if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
    let warenkorbmengeZuHoch = false
    this.navigateData.getshoppinglist().forEach(element => {
      if (element.id === this.artikel.id && element.kategorie === this.artikel.kategorie) {
        if (this.menge + element.menge > this.artikel.bestandsmenge) {
          this.menge = this.artikel.bestandsmenge - element.menge;
          this.snackBar.open('Menge wurde angepasst - Maximum wurde erreicht', '', {
            duration: 3000,
          });
          warenkorbmengeZuHoch = true;
        }
      }
    });
    if (!warenkorbmengeZuHoch) {
      if (this.menge <= this.artikel.bestandsmenge && this.menge > 0) {
        this.artikel.menge = this.menge;
        this.navigateData.addshopinglist(this.artikel, this.artikel.menge);
        this.router.navigate(['Warenkorb']);
      }
      else if (this.menge > this.artikel.bestandsmenge) {

        this.snackBar.open('Menge wurde angepasst - Maximum wurde erreicht', '', {
          duration: 3000,
        });
        this.menge = this.artikel.bestandsmenge;
      } else if (this.menge < 0) {

        this.snackBar.open('Menge nicht möglich', '', {
          duration: 3000,
        });
        this.menge = 1;
      }
    }
  }
  else{
    localStorage.setItem('produkt', '[]')
    let warenkorbmengeZuHoch = false
    this.navigateData.getshoppinglist().forEach(element => {
      if (element.id === this.artikel.id && element.kategorie === this.artikel.kategorie) {
        if (this.menge + element.menge > this.artikel.bestandsmenge) {
          this.menge = this.artikel.bestandsmenge - element.menge;
          this.snackBar.open('Menge wurde angepasst - Maximum wurde erreicht', '', {
            duration: 3000,
          });
          warenkorbmengeZuHoch = true;
        }
      }
    });
    if (!warenkorbmengeZuHoch) {
      if (this.menge <= this.artikel.bestandsmenge && this.menge > 0) {
        this.artikel.menge = this.menge;
        this.navigateData.addshopinglist(this.artikel, this.artikel.menge);
        this.router.navigate(['Warenkorb']);
      }
      else if (this.menge > this.artikel.bestandsmenge) {

        this.snackBar.open('Menge wurde angepasst - Maximum wurde erreicht', '', {
          duration: 3000,
        });
        this.menge = this.artikel.bestandsmenge;
      } else if (this.menge < 0) {

        this.snackBar.open('Menge nicht möglich', '', {
          duration: 3000,
        });
        this.menge = 1;
      }
    }
  }
  }

  navigatezusatzinfo() {
    this.router.navigate(["Produkte/" + this.artikel.kategorie + "/" + this.artikel.id + "/" + "Schlummerlampeninfo"])
  }

  onKey(menge: number) {
    if (menge > 0 && menge < this.artikel.bestandsmenge) {
      if (this.navigateData.getshoppinglist().find(x => x.id === this.artikel.id && x.kategorie === this.artikel.kategorie).menge + menge > this.artikel.bestandsmenge) {
        this.menge = this.artikel.bestandsmenge - this.navigateData.getshoppinglist().find(x => x.id === this.artikel.id && x.kategorie === this.artikel.kategorie).menge
        this.snackBar.open('Menge wurde angepasst - Maximum wurde erreicht', '', {
          duration: 3000,
        })
      }
    }
    else if (menge < 0) {
      this.snackBar.open('Menge nicht möglich', '', {
        duration: 3000,
      })
      this.menge = 1;
    }
    else if (menge > this.artikel.bestandsmenge) {
      this.snackBar.open('Die maximale Bestandsmenge wurde erreicht. Ihre Menge wurde angepasst', '', {
        duration: 3000,
      })
      this.menge = this.artikel.bestandsmenge;
    }
  }

  async artikelkategorie(Artikelkategorie: string) {
    switch (Artikelkategorie) {
      case 'Betonleuchten': {
        await this.DbService.getBetonlampenProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Betonfiguren': {
        await this.DbService.getBetonfigurenProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Schlummerlampen': {
        await this.DbService.getProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Holzaufsteller': {
        await this.DbService.getHolzaufstellerProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Kantholz': {
        await this.DbService.getKantholzProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Holzfiguren': {
        await this.DbService.getHolzfigurenProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Birkenstammdeko': {
        await this.DbService.getBirkenstammdekoProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Holzschilder': {
        await this.DbService.getHolzschilderProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Keraminfiguren': {
        await this.DbService.getKeraminfigurenProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      case 'Raysinfiguren': {
        await this.DbService.getRaysinfigurenProduktbyID(this.id).toPromise().then(data => {
          this.DbService.responsebyID = data
          this.artikel = this.DbService.responsebyID
        });
        this.wunschlistenpruefung();
        break;
      }
      default: {
        console.log('Es wurde keine passende Auswahl an Produkten gefunden');
        break;
      }
    };
  }

  toggleEditable() {
    this.navigateData.setwunschliste(this.artikel);
    this.wunschliste = !this.wunschliste;
  }

  wunschlistenpruefung() {
    this.wunschliste = this.navigateData.getwunschliste().some(a => (a.id === this.artikel.id && a.kategorie === this.artikel.kategorie));
  }
}
