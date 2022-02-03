import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatenbankService {
  public url: string = "https://api-chrisubis-hobby.de/Api";
  // http://localhost:81/Api
  // https://api-chrisubis-hobby.de/Api
  public response: any;
  public responsebyID: any;
  constructor(private http: HttpClient) { }

  public headers: HttpHeaders;

   getProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Shop",{ headers: this.headers });
  }

  getHolzaufstellerProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzaufsteller",{ headers: this.headers });
  }

  getKantholzProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Kantholz",{ headers: this.headers });
  }

  getBirkenstammdekoProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Birkenstammdeko",{ headers: this.headers });
  }

  getHolzschilderProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzschilder",{ headers: this.headers });
  }

  getBetonlampenProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Betonlampen",{ headers: this.headers });
  }

  getHolzfigurenProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzfiguren",{ headers: this.headers });
  }

  getBetonProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Beton",{ headers: this.headers });
  }

  getKeraminfigurenProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Keraminfiguren",{ headers: this.headers });
  }

  getRaysinfigurenProdukte(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Raysinfiguren",{ headers: this.headers });
  }

  getProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Shop/"+id,{ headers: this.headers });
  }

  getBetonlampenProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Betonlampen/"+id,{ headers: this.headers });
  }
  getBetonfigurenProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Beton/"+id,{ headers: this.headers });
  }
  getHolzaufstellerProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzaufsteller/"+id,{ headers: this.headers });
  }
  getKantholzProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Kantholz/"+id,{ headers: this.headers });
  }
  getBirkenstammdekoProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Birkenstammdeko/"+id,{ headers: this.headers });
  }
  getHolzschilderProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzschilder/"+id,{ headers: this.headers });
  }
  getHolzfigurenProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Holzfiguren/"+id,{ headers: this.headers });
  }

  getKeraminfigurenProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Keraminfiguren/"+id,{ headers: this.headers });
  }

  getRaysinfigurenProduktbyID(id: number){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Raysinfiguren/"+id,{ headers: this.headers });
  }

  getBewertungspruefung(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Bewertungspruefung",{ headers: this.headers });
  }

  setBewertungspruefung(bewertung) {
         return this.http.post(this.url+'/Bewertungspruefung', bewertung,{headers:this.headers});
   }

   getBewertungen(){
    this.headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      })
    return this.http.get(this.url+"/Bewertungen",{ headers: this.headers });
  }

 async setBewertungen(bewertung) {
    let response = await this.deletebewertungen(bewertung.id).toPromise();
        bewertung.id = null;    
         return this.http.post(this.url+'/Bewertungen', bewertung,{headers:this.headers, observe: 'response'});
   }

   deletebewertungen(id: number){
     return this.http.delete(this.url+'/Bewertungspruefung/'+id,{headers:this.headers, observe:'response'});
   }

   setneueartikelbetonlampen(artikel) {
   return this.http.post(this.url+'/Betonlampen', artikel,{headers:this.headers});
  }

  setneueartikelbetonfiguren(artikel) {
   return this.http.post(this.url+'/Beton', artikel,{headers:this.headers});
  }

  setneueartikelschlummerlampen(artikel) {
   return this.http.post(this.url+'/Shop', artikel,{headers:this.headers});
  }

  setneueartikelholzaufsteller(artikel) {
   return this.http.post(this.url+'/Holzaufsteller', artikel,{headers:this.headers});
  }

  setneueartikelkantholz(artikel) {
   return this.http.post(this.url+'/Kantholz', artikel,{headers:this.headers});
  }

  setneueartikelholzfiguren(artikel) {
   return this.http.post(this.url+'/Holzfiguren', artikel,{headers:this.headers});
  }

  setneueartikelbirkenstammdeko(artikel) {
   return this.http.post(this.url+'/Birkenstammdeko', artikel,{headers:this.headers});
  }

  setneueartikelholzschilder(artikel) {
   return this.http.post(this.url+'/Holzschilder', artikel,{headers:this.headers});
  }
}


