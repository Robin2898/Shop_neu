import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { DatenbankService } from '../Services/datenbank.service';
import { NavigateDataService } from '../Services/navigate.data.service';
import { Warenkorb } from '../Services/warenkorb.model';

@Component({
  selector: 'app-produktsuche',
  templateUrl: './produktsuche.component.html',
  styleUrls: ['./produktsuche.component.css']
})
export class ProduktsucheComponent implements OnInit {

  artikel: Artikel = {id: 0, kategorie:'', produktname:'', zusatzinfo:'', h_x_b_x_l:'', produktinformation:'', produktdetails:'', besonderheiten:'', preis:'', bild:'', bestandsmenge:0, personalisierung:'', menge:0};

  alleprodukte: Artikel[]=[];
  alleproduktetemp:Artikel[]=[];
  produkte: Artikel[];
  neuseAttribut: string;
  attribut: string;
  gesamt: Artikel[];
  menge: number = 1;
  datasource: Artikel[];

  warenkorb: Warenkorb[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
      this.alleproduktetemp = this.alleprodukte.filter(x => (x.produktname.toLowerCase().includes(filterValue.toLowerCase())))
  } 

  constructor(private DbService: DatenbankService, private router:Router, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.gesamtprodukte();
  }

  async gesamtprodukte(){
    this.alleprodukte=[];        

    await this.DbService.getBetonlampenProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getBetonProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getHolzaufstellerProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getKantholzProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getHolzschilderProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

    await this.DbService.getHolzfigurenProdukte().toPromise().then(data =>{
          this.DbService.response = data
          this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
          this.attribut = this.DbService.response
          this.neuseAttribut = JSON.stringify(this.neuseAttribut);
          for(let i=0; this.DbService.response.length > i; i++){
            this.alleprodukte.push(this.DbService.response[i])
          }
    })

      await this.DbService.getKeraminfigurenProdukte().toPromise().then(data =>{
        this.DbService.response = data
        this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
        this.attribut = this.DbService.response
        this.neuseAttribut = JSON.stringify(this.neuseAttribut);
        for(let i=0; this.DbService.response.length > i; i++){
          this.alleprodukte.push(this.DbService.response[i])
        }
})

      await this.DbService.getRaysinfigurenProdukte().toPromise().then(data =>{
        this.DbService.response = data
        this.neuseAttribut = this.DbService.response, JSON.stringify(this.neuseAttribut)
        this.attribut = this.DbService.response
        this.neuseAttribut = JSON.stringify(this.neuseAttribut);
        for(let i=0; this.DbService.response.length > i; i++){
          this.alleprodukte.push(this.DbService.response[i])
        }
      })
    this.alleproduktetemp = this.alleprodukte;
  }

  navigateWarenkorb(artikel: Artikel){
    this.navigateData.addshopinglist(artikel,this.menge);
    this.router.navigate(['Warenkorb']);
  }
y
  navigateProdukte(elem: Warenkorb){
    this.router.navigate(["Produkte/"+elem.kategorie+"/"+elem.id])
}

}
