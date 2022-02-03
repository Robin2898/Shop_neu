import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  private routerEventSubscriber: Subscription

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routerEventSubscriber = this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(1, 1)
  });
  }

  ngOnDestroy() {
    this.routerEventSubscriber.unsubscribe();
}

  navigateVersand(){
    this.router.navigate(['Versand']);
  }
  navigateWiderruf(){
    this.router.navigate(['Widerruf']);
  }
  navigateImpressum(){
    this.router.navigate(['Impressum']);
  }
  navigateAGB(){
    this.router.navigate(['AGB']);
  }
  navigateDatenschutz(){
    this.router.navigate(['Datenschutz']);
  }
  navigateBewertungen(){
    this.router.navigate(['Bewertungsuebersicht'])
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}