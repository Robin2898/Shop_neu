import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { NgxPayPalModule } from 'ngx-paypal';
import { FlexLayoutModule } from '@angular/flex-layout';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');



import { AppComponent } from './app.component';
import { AgbComponent } from './agb/agb.component';
import { HeaderComponent } from './header/header.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { VersandComponent } from './versand/versand.component';
import { NgxPopper } from 'angular-popper';
import { ProdukteComponent } from './produkte/produkte.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
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
import { AdminBereichBewertungenComponent } from './admin-bereich-bewertungen/admin-bereich-bewertungen.component';
import { AdminBereichProdukteComponent } from './admin-bereich-produkte/admin-bereich-produkte.component';
import { WiderrufsbelehrungComponent } from './widerrufsbelehrung/widerrufsbelehrung.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { BestellbestaetigungComponent } from './bestellbestaetigung/bestellbestaetigung.component';
import { ProduktuebersichtComponent } from './produktuebersicht/produktuebersicht.component';
import { AdminProdukteErstellenComponent } from './admin-produkte-erstellen/admin-produkte-erstellen.component';
import { AdminProdukteLoeschenComponent } from './admin-produkte-loeschen/admin-produkte-loeschen.component';
import { KontaktbestaetigungComponent } from './kontaktbestaetigung/kontaktbestaetigung.component';
import { BewertungsbestaetigungComponent } from './bewertungsbestaetigung/bewertungsbestaetigung.component';

@NgModule({
  declarations: [
    AppComponent,
    AgbComponent,
    HeaderComponent,
    ImpressumComponent,
    InitialPageComponent,
    KontaktComponent,
    ShopPageComponent,
    VersandComponent,
    ProdukteComponent,
    FooterComponent,
    NavigationComponent,
    WarenkorbComponent,
    ProduktKategorienComponent,
    BestellabschlussComponent,
    BestellZusammenfassungComponent,
    AdminBereichComponent,
    AdminLoginComponent,
    WunschlisteComponent,
    SchlummerlampenZusatzinfoComponent,
    ProduktsucheComponent,
    BewertungsuebersichtComponent,
    BewertungserstellungComponent,
    AdminBereichBewertungenComponent,
    AdminBereichProdukteComponent,
    WiderrufsbelehrungComponent,
    DatenschutzComponent,
    BestellbestaetigungComponent,
    ProduktuebersichtComponent,
    AdminProdukteErstellenComponent,
    AdminProdukteLoeschenComponent,
    KontaktbestaetigungComponent,
    BewertungsbestaetigungComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPopper,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    FlexLayoutModule,
    NgxPayPalModule,

  ],
  providers: [{
   provide: LOCALE_ID,
   useValue: 'de'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
