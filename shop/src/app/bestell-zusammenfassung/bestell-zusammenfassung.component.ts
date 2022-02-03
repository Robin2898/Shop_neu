import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from '../Services/adresse.model';
import { NavigateDataService } from '../Services/navigate.data.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Warenkorb } from '../Services/warenkorb.model';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-bestell-zusammenfassung',
  templateUrl: './bestell-zusammenfassung.component.html',
  styleUrls: ['./bestell-zusammenfassung.component.css']
})
export class BestellZusammenfassungComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;

  buttonPosition: 'zahlungversand' = 'zahlungversand';
  versandPosition: 'versand' = 'versand';

  abschluss: Warenkorb[];
  adresse: Adresse;
  http: any;
  warenkorb: Warenkorb[];
  name: string;
  menge: string;
  preis: string;
  anrede: string;
  anredem: string;
  anredew: string;
  anreded: string;
  anredeneu: string;
  mail:string;
  notiz: string;
  showSuccess:boolean;
  komplettpreis: number=0;
  test:any;
  versandkostenpreis:number;
  summe:number;
  summepreis:number;
  bezahlpreis:number;

  constructor(private  router: Router, private navigateData: NavigateDataService) { }

  ngOnInit(): void {
    this.adresse = this.navigateData.getadresse();
    this.warenkorb = this.navigateData.getshoppinglist();
    this.abschluss=this.navigateData.getshoppinglist();
    this.gesamtpreis();
    this.versandkosten();
    this.zwischensumme();
    this.initConfig();

  }

  // ARlYY2vKEmTTHBm5zGk9lik_uVIAGAfV4r7Omn-klTAx9pBf72ScpHGFf1JdpyLjZXSObtrgGsqQYS02
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'AdMgpdcApgL55WkJRZ32sQDFQPBmd35Xfhc7fTKLOFt1xEPgGGiCqfDR0Ir5T_ltelhnOPZccutUMovO',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: this.bezahlpreis.toString(),
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.bezahlpreis.toString()
              }
            }
          },
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      // label: 'paypal',
      // layout: 'horizontal'
      layout:  'horizontal',
      color:   'blue',
      shape:   'pill',
      label:   'paypal',
      tagline: false,
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
      this.sendEmail();
      this.router.navigate(['Bestellbestätigung']);
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  navigatebestellabschluss(){
    this.router.navigate(['Bestellabschluss']);
  }

  public sendEmail(e?: Event) {
    
    // e.preventDefault();
    this.anrede="";
    this.name="";
    this.preis="";
    this.menge="";
    this.notiz="";
    this.anredem="Sehr geehrter "
    this.anredew="Sehr geehrte "
    this.anreded="Sehr geehrtes"
    this.anredeneu=""

    if(this.adresse.anrede === "Herr"){
      this.anredeneu = this.anredem
    }
    else if(this.adresse.anrede === "Frau"){
      this.anredeneu = this.anredew
    }
    else{
      this.anredeneu = this.anreded
    }
    this.warenkorb.forEach(w=>{this.name+= "\n" + w.produktname, this.menge+= '\n' + w.menge, this.preis+=w.preis})
    emailjs.send("service_wv3yznp","template_1uua8ur",{
      anredevor: this.anredeneu,
      anrede: this.adresse.anrede,
      to_name: this.adresse.vorname+" "+this.adresse.nachname,
      produktname: this.name,
      menge: this.menge,
      preis: this.preis,
      versandkosten: this.versandkostenpreis,
      mail: this.adresse.email,
      notiz: this.adresse.notiz,
      }, "user_4a8CiymIEUROK5tFvCCVF");
  }

  gesamtpreis(){
    if(localStorage.getItem('produkt') != null && localStorage.getItem('produkt') != undefined ){
      this.abschluss.forEach(elem=>(this.komplettpreis+=elem.komplettpreis));
      }
      else {
        return 0;
      }
  }

  zwischensumme(){
    this.summepreis = this.komplettpreis;
    this.summe = this.summepreis+this.versandkostenpreis
    this.bezahlpreis = this.summe;
  }

  versandkosten(){
    if(this.komplettpreis < 50.0){
      this.versandkostenpreis = 5.00
    }
    else if(this.komplettpreis > 50.0){
      this.versandkostenpreis = 0.00
    }
  }
}
