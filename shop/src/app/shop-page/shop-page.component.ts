import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { NavigateDataService } from '../Services/navigate.data.service';
@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor(private router: Router, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
  }

navigateHolz(type:string){
  this.navigateData.artikelType(type);
  this.router.navigate(["Kategorien"])
}

}
