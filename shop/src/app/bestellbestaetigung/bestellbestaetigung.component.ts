import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from '../Services/adresse.model';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-bestellbestaetigung',
  templateUrl: './bestellbestaetigung.component.html',
  styleUrls: ['./bestellbestaetigung.component.css']
})
export class BestellbestaetigungComponent implements OnInit {

  abschluss: Adresse[];
  email: string;

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.emailermitteln(this.navigateData.getadresse());
  }

  navigatezurueck(){
    this.router.navigate(['Home']);
  }

  emailermitteln(adresse: Adresse){
      this.navigateData.getadresse()
      this.email = adresse.email;
  }
}