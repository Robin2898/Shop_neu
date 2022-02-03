import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Bewertung } from '../Services/bewertung.model';

@Component({
  selector: 'app-bewertungserstellung',
  templateUrl: './bewertungserstellung.component.html',
  styleUrls: ['./bewertungserstellung.component.css']
})
export class BewertungserstellungComponent implements OnInit {

  anrede:string;
  vorname:string;
  nachname:string;
  synonym: string;
  email:string;
  bewertungen:string;
  bewertungsdaten:string;
  neu: string;

  test: boolean =false;
  synonymcheck: boolean=false;

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService, private snackBar: MatSnackBar) { }

  bewertung: Bewertung = {anrede:"", vorname:"", nachname:"", synonym:"", email:"", bewertung:""}

  ngOnInit(): void {
  }

  toggleEditable(event) {
    if ( event.target.checked ) {
        this.test = true;
   }
    else {
     this.test = false;
   }
  }

  tooglesynonym(event) {
    if ( event.target.checked ) {
        this.synonymcheck = true;
        this.synonympruefung();
   }
    else {
     this.synonymcheck = false;
     this.synonympruefung()
   }
  }

  wertenichtleer(bewertung: Bewertung){
    if (this.test===false || bewertung.anrede==="" || bewertung.vorname==="" || bewertung.nachname==="" && bewertung.synonym==="" || bewertung.email==="" || bewertung.bewertung===""){
      this.snackBar.open('Es müssen alle Pflichtfelder ausgefüllt werden!', '', {
        duration: 3000,
      });
  }
  else if (bewertung.synonym !="" && this.synonymcheck ===false){
    this.snackBar.open('Es müssen alle Pflichtfelder ausgefüllt werden!', '', {
      duration: 3000,
    });
  }
  else{
    this.bewertungszusammenfassung();
    // this.snackBar.open('Vielen Dank für Ihre Bewertung. Nach erfolgreicher Prüfung wird diese im Shop veröffentlicht.', '', {
    //   duration: 3000,
    // });
  }
}

synonympruefung(){
  if(this.synonymcheck === true){
    this.neu = "Bitte das Synonym verwenden"
  }
  else{
    this.neu = "Bitte vollständigen Namen verwenden"
  }
}

  async bewertungszusammenfassung(){
    await this.DbService.setBewertungspruefung(this.bewertung).toPromise();
    this.bewertungsdaten = this.navigateData.getbewertung()
    this.router.navigate(['Bewertungsbestaetigung'])
    this.anrede="";
    this.vorname="";
    this.nachname="";
    this.synonym="";
    this.email="";
    this.bewertungen="";
    emailjs.send("service_wv3yznp","template_ntfbaxf",{
      anrede: this.bewertung.anrede,
      to_name: this.bewertung.vorname+" "+this.bewertung.nachname,
      email: this.bewertung.email,
      test: this.neu,
      synonym: this.bewertung.synonym,
      bewertung: this.bewertung.bewertung,
      }, "user_4a8CiymIEUROK5tFvCCVF");
    
  }
}

