import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';

@Component({
  selector: 'app-kontaktbestaetigung',
  templateUrl: './kontaktbestaetigung.component.html',
  styleUrls: ['./kontaktbestaetigung.component.css']
})
export class KontaktbestaetigungComponent implements OnInit {

  constructor(private  router: Router, public DbService: DatenbankService, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
  }

  navigatezurueck(){
    this.router.navigate(['Home']);
  }

}
