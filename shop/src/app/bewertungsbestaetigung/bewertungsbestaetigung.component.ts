import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-bewertungsbestaetigung',
  templateUrl: './bewertungsbestaetigung.component.html',
  styleUrls: ['./bewertungsbestaetigung.component.css']
})
export class BewertungsbestaetigungComponent implements OnInit {

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
  }

  navigatezurueck(){
    this.router.navigate(['Bewertungsuebersicht']);
  }

  navigateshop(){
    this.router.navigate(['Shop']);
  }

}
