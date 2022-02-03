import { Injectable } from "@angular/core";
import { Warenkorb } from '../Services/warenkorb.model';
import { Artikel } from "./artikel.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";
import { Adresse } from "./adresse.model";
import { Kontakt } from "./kontakt.model";
import { Bewertung } from "./bewertung.model";


@Injectable({
  providedIn: 'root'
})
export class NavigateDataService {
  artType: string;
  artKategorie: string;
  artikelnummer: number;
  tempwarenkorb: string;
  tempmenge: number;
  href: string = "";
  kategorie: string[] = [];
  id: number;
  adresse: string;
  kontakt: string;
  tempbewertung: string;
  artikel: Artikel[];
  tempartikel: string;
  bezahlung: number;



  constructor(private snackBar: MatSnackBar, private router: Router) { }

  warenkorb: Warenkorb[];

  artikelType(type: string) {
    this.artType = type;

    localStorage.setItem('artikeltype', type);

  }
  artikelKategorie(kategorie: string) {
    this.artKategorie = kategorie;

    localStorage.setItem('artikelkategorie', kategorie);

  }
  artikelID(artid: number) {
    this.artikelnummer = artid

    localStorage.setItem('artikelid', artid.toString());

  }
  getArtikelID(id: number) {

    this.href = this.router.url.split('/').pop()

    this.id = Number(this.href)

  }
  getArtikelType() {
    return localStorage.getItem('artikeltype')
  }
  getArtikelKategorie() {

    this.kategorie = this.router.url.split('/')

    return this.kategorie.slice(2)[0];
  }

  getArtikelIDLampe() {

    this.kategorie = this.router.url.split('/')

    return this.kategorie.slice(3)[0];
  }
  addshopinglist(artikel: Artikel, Menge: number) {
    if (Menge > 0) {

      if (Menge <= artikel.bestandsmenge) {

        if (localStorage.getItem('produkt') === null) {
          this.warenkorb = [];
          this.warenkorb.push({
            id: artikel.id, kategorie: artikel.kategorie, produktname: artikel.produktname, zusatzinfo: artikel.zusatzinfo, h_x_b_x_l: artikel.h_x_b_x_l, produktinformation: artikel.produktinformation,
            produktdetails: artikel.produktdetails, besonderheiten: artikel.besonderheiten, preis: artikel.preis, bild: artikel.bild, menge: Menge, komplettpreis: 0, bestandsmenge: artikel.bestandsmenge
          })
          localStorage.setItem('produkt', JSON.stringify(this.warenkorb));

        }
        else {
          this.tempwarenkorb = localStorage.getItem('produkt')
          this.warenkorb = JSON.parse(this.tempwarenkorb)


          if (this.warenkorb.some(x => (x.id === artikel.id && x.kategorie === artikel.kategorie))) {
            this.tempmenge = this.warenkorb.find(x => x.id === artikel.id && x.kategorie === artikel.kategorie).menge + Menge
            this.warenkorb.find(x => x.id === artikel.id && x.kategorie === artikel.kategorie).menge = this.tempmenge

            if (this.tempmenge > artikel.bestandsmenge) {
              this.snackBar.open('Die maximale Anzahl ist bereits erreicht. Maximale Stückzahl 30 Stück', '', {
                duration: 3000,
              });
              this.warenkorb.find(x => x.id === artikel.id && x.kategorie === artikel.kategorie).menge = artikel.bestandsmenge

              localStorage.setItem('produkt', JSON.stringify(this.warenkorb));

            }
            else {
              localStorage.setItem('produkt', JSON.stringify(this.warenkorb));

            }
          }
          else {

            this.warenkorb.push({
              id: artikel.id, kategorie: artikel.kategorie, produktname: artikel.produktname, zusatzinfo: artikel.zusatzinfo, h_x_b_x_l: artikel.h_x_b_x_l, produktinformation: artikel.produktinformation,
              produktdetails: artikel.produktdetails, besonderheiten: artikel.besonderheiten, preis: artikel.preis, bild: artikel.bild, menge: Menge, komplettpreis: 0, bestandsmenge: artikel.bestandsmenge
            })
            localStorage.setItem('produkt', JSON.stringify(this.warenkorb));

          }

        }
      }
      else {
        this.snackBar.open('Menge nicht möglich. Nur positive Mengen sind möglich', '', {
          duration: 3000,
        });

      }
    }
    else {
      this.snackBar.open('Hasi', '', {
        duration: 3000,
      });

    }
  }

  getshoppinglist() {
    
    this.tempwarenkorb = localStorage.getItem('produkt')
    return JSON.parse(this.tempwarenkorb)

  }

  localstorage(warenkorb: Warenkorb[]) {
    localStorage.setItem('produkt', JSON.stringify(warenkorb));

  }

  warenkorbmenge() {
    if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
    return this.getshoppinglist().length;
    }
    else {
      return 0;
    }
  }

  wunschlistenmenge() {
    return this.getwunschliste().length;
  }

  setadresse(adresse: Adresse) {
    localStorage.setItem('adresse', JSON.stringify(adresse));
  }

  getadresse() {
    this.adresse = localStorage.getItem('adresse')
    return JSON.parse(this.adresse)
  }

  setkontakt(kontakt: Kontakt) {
    localStorage.setItem('kontakt', JSON.stringify(kontakt));
  }

  getkontakt() {
    this.kontakt = localStorage.getItem('kontakt')
    return JSON.parse(this.kontakt)
  }

  setbewertung(bewertung: Bewertung) {
    localStorage.setItem('bewertung', JSON.stringify(bewertung));

  }

  getbewertung() {
    this.tempbewertung = localStorage.getItem('bewertung')

    return JSON.parse(this.tempbewertung)
  }

  setwunschliste(artikel: Artikel) {
    if (localStorage.getItem('wunschliste') === null) {
      this.artikel = [];
      this.artikel.push({
        id: artikel.id, kategorie: artikel.kategorie, produktname: artikel.produktname, zusatzinfo: artikel.zusatzinfo, h_x_b_x_l: artikel.h_x_b_x_l, produktinformation: artikel.produktinformation,
        produktdetails: artikel.produktdetails, besonderheiten: artikel.besonderheiten, preis: artikel.preis, bild: artikel.bild, bestandsmenge: artikel.bestandsmenge, personalisierung: artikel.personalisierung, menge: artikel.menge
      })
      localStorage.setItem('wunschliste', JSON.stringify(this.artikel));

    }
    else {
      this.tempartikel = localStorage.getItem('wunschliste')
      this.artikel = JSON.parse(this.tempartikel)

      if (this.artikel.some(a => (a.id === artikel.id && a.kategorie === artikel.kategorie))) {

        const index: number = this.artikel.indexOf(this.artikel.find(a => (a.id === artikel.id && a.kategorie === artikel.kategorie)));
        if (index !== -1) {
          this.artikel.splice(index, 1);
        }

        localStorage.setItem('wunschliste', JSON.stringify(this.artikel));


      }
      else {
        this.artikel.push({
          id: artikel.id, kategorie: artikel.kategorie, produktname: artikel.produktname, zusatzinfo: artikel.zusatzinfo, h_x_b_x_l: artikel.h_x_b_x_l, produktinformation: artikel.produktinformation,
          produktdetails: artikel.produktdetails, besonderheiten: artikel.besonderheiten, preis: artikel.preis, bild: artikel.bild, bestandsmenge: artikel.bestandsmenge, personalisierung: artikel.personalisierung, menge: artikel.menge
        })
        localStorage.setItem('wunschliste', JSON.stringify(this.artikel));
      }


    }
  }

  getwunschliste() {
    if (localStorage.getItem('wunschliste') === null) {
      localStorage.setItem('wunschliste', '[]');
    }
    this.tempartikel = localStorage.getItem('wunschliste')
    return JSON.parse(this.tempartikel)
  }

  bezahlpreis(zahlpreis) {
    this.bezahlung = zahlpreis;
  }

}