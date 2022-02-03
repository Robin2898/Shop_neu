import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateDataService } from '../Services/navigate.data.service';

export interface Kategorien{
  bezeichnung: string;
  bild: string;
}

const Beton:Kategorien[]=[{bezeichnung:'Betonleuchten', bild: './assets/images/Betonlampen/20210314133643.jpg'}, {bezeichnung:'Betonfiguren', bild: './assets/images/Betonfiguren/20210314134137.jpg'}]
const Holz:Kategorien[]=[{bezeichnung:'Holzaufsteller', bild: './assets/images/Holzaufsteller/20210314142052.jpg'}, {bezeichnung:'Schlummerlampen', bild: './assets/images/Schlummerlampen/Paw Patrol CHASE .jpg'}, {bezeichnung:'Kantholz', bild: './assets/images/Kantholz/IgelmitApfel.JPG'}, {bezeichnung:'Holzfiguren', bild: './assets/images/Holzfiguren/BegruessungsfigurKuh.jpg'}, {bezeichnung:'Holzschilder', bild: './assets/images/Holzschilder/Wohlfuehloase.jpg'}]
const Keramin:Kategorien[]=[{bezeichnung:'Keraminfiguren', bild: './assets/images/Keraminfiguren/Keramin Pilz klein.JPG'}]
const Raysin:Kategorien[]=[{bezeichnung:'Raysinfiguren', bild: './assets/images/Raysinfiguren/Raysin Elch.JPG'}]

@Component({
  selector: 'app-produkt-kategorien',
  templateUrl: './produkt-kategorien.component.html',
  styleUrls: ['./produkt-kategorien.component.css']
})
export class ProduktKategorienComponent implements OnInit {


  Kategorien:Kategorien[]=[]

  constructor(private navigateData: NavigateDataService, private  router: Router) { }

  ngOnInit(): void {
    this.Artikelkategorie();
  }

  onimageclick(bezeichnung:string){
    this.navigateData.artikelKategorie(bezeichnung)
    this.router.navigate(["Produktübersicht/"+bezeichnung])
  }

  navigateWarenkorb(){
    this.router.navigate(['Warenkorb']);
  } 

  navigatekategorien(){
    this.router.navigate(['Shop']);
  }

  Artikelkategorie(){
    switch(this.navigateData.getArtikelType()) { 
      case 'Holz': { 
        this.Kategorien=Holz; 
         break; 
      } 
      case 'Beton': { 
        this.Kategorien=Beton;
         break; 
      }
      case 'Keramin': { 
        this.Kategorien=Keramin;
         break; 
      }
      case 'Raysin': { 
        this.Kategorien=Raysin;
         break; 
      }
      default: {
        console.log('Es wurde keine passende Auswahl an Produkten gefunden');
        break;
      }
   } ;
}
}
