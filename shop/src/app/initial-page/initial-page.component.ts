import { Component, OnInit } from '@angular/core';
import {DatenbankService} from '../Services/datenbank.service'

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
  response: any;

  constructor(public DbService: DatenbankService) { }

  ngOnInit(): void {
}

}
