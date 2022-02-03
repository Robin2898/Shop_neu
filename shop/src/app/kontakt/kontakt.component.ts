import { Component, OnInit} from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Kontakt } from '../Services/kontakt.model';
import { NavigateDataService } from '../Services/navigate.data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  anrede:string;
  vorname:string;
  nachname:string;
  email:string;
  telefonnummer:string;
  nachricht:string;
  kontaktdaten:string;

  test: boolean =false;

  constructor(private  router: Router, private navigateData: NavigateDataService, private snackBar: MatSnackBar,) { }

  kontakt: Kontakt = {anrede:"", vorname:"", nachname:"", email:"", telefonnummer:"", nachricht:""}


  ngOnInit(): void {
  }

  wertenichtleer(kontakt: Kontakt){
    if (this.test===false || kontakt.anrede==="" || kontakt.vorname==="" || kontakt.nachname==="" || kontakt.email==="" || kontakt.telefonnummer==="" && kontakt.nachricht===""){
      this.snackBar.open('Es müssen alle Pflichtfelder ausgefüllt werden!', '', {
        duration: 3000,
      });
  }
  else {
    this.kontaktzusammenfassung();
    // this.snackBar.open('Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.', '', {
    //   duration: 3000,
    // });
  }
}

toggleEditable(event) {
  if ( event.target.checked ) {
      this.test = true;
 }
  else {
   this.test = false;
 }
}

  kontaktzusammenfassung(){
    this.navigateData.setkontakt(this.kontakt);
    this.kontaktdaten = this.navigateData.getkontakt()
    this.router.navigate(['Kontaktbestaetigung'])
    this.anrede="";
    this.vorname="";
    this.nachname="";
    this.email="";
    this.telefonnummer="";
    this.nachricht="";
    emailjs.send("service_wv3yznp","template_8ejk5og",{
      anrede: this.kontakt.anrede,
      to_name: this.kontakt.vorname+" "+this.kontakt.nachname,
      email: this.kontakt.email,
      telefonnummer: this.kontakt.telefonnummer,
      nachricht: this.kontakt.nachricht,
      }, "user_4a8CiymIEUROK5tFvCCVF");
    
  }

}
