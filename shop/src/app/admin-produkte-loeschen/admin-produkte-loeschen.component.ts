import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artikel } from '../Services/artikel.model';
import { DatenbankService } from '../Services/datenbank.service';

@Component({
  selector: 'app-admin-produkte-loeschen',
  templateUrl: './admin-produkte-loeschen.component.html',
  styleUrls: ['./admin-produkte-loeschen.component.css']
})
export class AdminProdukteLoeschenComponent implements OnInit {


  alleprodukte: Artikel[]=[];
  alleproduktetemp:Artikel[]=[];
  produkte: Artikel[];
  neuseAttribut: string;
  attribut: string;
  gesamt: Artikel[];
  user:string;

  http: any;

  constructor(private DbService: DatenbankService, private  router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('admin');
    this.datenpruefung();
    this.gesamtprodukte();
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.alleproduktetemp = this.alleprodukte.filter(x => (x.produktname.toLowerCase().includes(filterValue.toLowerCase())))
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

    await this.DbService.getBirkenstammdekoProdukte().toPromise().then(data =>{
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
    this.alleproduktetemp = this.alleprodukte;

  }

  datenpruefung(){
    if(localStorage.getItem('admin') === null)
    this.router.navigate(['Adminlogin']);
  }

  logout(){
    localStorage.removeItem('admin')
    this.router.navigate(['Adminlogin']);
    }

    navigateshop(){
      this.router.navigate(['Shop']);
    }

    navigateadminbereich(){
      this.router.navigate(['Admin'])
    }



}
