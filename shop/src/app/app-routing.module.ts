import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { VersandComponent } from './versand/versand.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AgbComponent } from './agb/agb.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { ProduktKategorienComponent } from './produkt-kategorien/produkt-kategorien.component';
import { BestellabschlussComponent } from './bestellabschluss/bestellabschluss.component';
import { BestellZusammenfassungComponent } from './bestell-zusammenfassung/bestell-zusammenfassung.component';
import { AdminBereichComponent } from './admin-bereich/admin-bereich.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WunschlisteComponent } from './wunschliste/wunschliste.component';
import { SchlummerlampenZusatzinfoComponent } from './schlummerlampen-zusatzinfo/schlummerlampen-zusatzinfo.component';
import { ProduktsucheComponent } from './produktsuche/produktsuche.component';
import { BewertungsuebersichtComponent } from './bewertungsuebersicht/bewertungsuebersicht.component';
import { BewertungserstellungComponent } from './bewertungserstellung/bewertungserstellung.component';
import { AdminBereichProdukteComponent } from './admin-bereich-produkte/admin-bereich-produkte.component';
import { AdminBereichBewertungenComponent } from './admin-bereich-bewertungen/admin-bereich-bewertungen.component';
import { WiderrufsbelehrungComponent } from './widerrufsbelehrung/widerrufsbelehrung.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { BestellbestaetigungComponent } from './bestellbestaetigung/bestellbestaetigung.component';
import { ProduktuebersichtComponent } from './produktuebersicht/produktuebersicht.component';
import { AdminProdukteErstellenComponent } from './admin-produkte-erstellen/admin-produkte-erstellen.component';
import { AdminProdukteLoeschenComponent } from './admin-produkte-loeschen/admin-produkte-loeschen.component';
import { KontaktbestaetigungComponent } from './kontaktbestaetigung/kontaktbestaetigung.component';
import { BewertungsbestaetigungComponent } from './bewertungsbestaetigung/bewertungsbestaetigung.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: InitialPageComponent },
  { path: 'Shop', component: ShopPageComponent },
  { path: 'Kontakt', component: KontaktComponent },
  { path: 'Versand', component: VersandComponent },
  { path: 'Impressum', component: ImpressumComponent },
  { path: 'AGB', component: AgbComponent },
  { path: 'Produkte/:bezeichnung/:id', component: ProdukteComponent },
  { path: 'Produktübersicht/:bezeichnung', component: ProduktuebersichtComponent },
  { path: 'Kategorien', component: ProduktKategorienComponent },
  { path: 'Warenkorb', component: WarenkorbComponent },
  { path: 'Bestellabschluss', component: BestellabschlussComponent },
  { path: 'Bestellzusammenfassung', component: BestellZusammenfassungComponent },
  // { path: 'Admin', component: AdminBereichComponent },
  // { path: 'Adminlogin', component: AdminLoginComponent },
  { path: 'Wunschliste', component: WunschlisteComponent },
  { path: 'Produkte/:bezeichnung/:id/Schlummerlampeninfo', component: SchlummerlampenZusatzinfoComponent },
  { path: 'Produktsuche', component: ProduktsucheComponent },
  { path: 'Bewertungsuebersicht', component: BewertungsuebersichtComponent },
  { path: 'Bewertungserstellung', component: BewertungserstellungComponent },
  // { path: 'Adminprodukte', component: AdminBereichProdukteComponent },
  // { path: 'Adminbewertungen', component: AdminBereichBewertungenComponent },
  { path: 'Widerruf', component: WiderrufsbelehrungComponent },
  { path: 'Datenschutz', component: DatenschutzComponent },
  { path: 'Bestellbestätigung', component: BestellbestaetigungComponent },
  // { path: 'Adminprodukteentfernen', component: AdminProdukteLoeschenComponent },
  // { path: 'Adminprodukteerstellen', component: AdminProdukteErstellenComponent },
  { path: 'Kontaktbestaetigung', component: KontaktbestaetigungComponent },
  { path: 'Bewertungsbestaetigung', component: BewertungsbestaetigungComponent },
  
  
  {path: '**', redirectTo: 'Home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}