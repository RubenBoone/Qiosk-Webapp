import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LanguageApp } from 'src/app/shared/datatables/languages';
import { KioskService } from '../kiosk.service';
import { Kiosk } from './kiosk';

@Component({
  selector: 'app-kiosk-table',
  templateUrl: './kiosk-table.component.html',
  styleUrls: ['./kiosk-table.component.scss']
})
export class KioskTableComponent implements OnInit, OnDestroy {
    // font awesome icons
    faSort=faSort

  kiosks: Kiosk[] = [];
  kiosks$: Subscription = new Subscription();
  deleteKiosk$: Subscription = new Subscription();
  postKiosk$: Subscription = new Subscription();
  putKiosk$: Subscription = new Subscription();

  // Extra
  dtOptions: DataTables.Settings = {};

  kiosk: Kiosk = {kioskID: 0, name: "", description: "", coordinate: ""};
  errorMessage: string = '';

  constructor(private router: Router, private kioskService: KioskService) { }

  ngOnInit(): void {
    this.dtOptions = {language: LanguageApp.dutch_datatables};
    this.getKiosks();
  }

  ngOnDestroy(): void {
    this.kiosks$.unsubscribe();
    this.postKiosk$.unsubscribe();
    this.putKiosk$.unsubscribe();
    this.deleteKiosk$.unsubscribe();
  }

  add() {
    this.router.navigate(['admin/kiosks/form'], {state: {mode: "add"}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['admin/kiosks/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteKiosk$ = this.kioskService.deleteKiosk(id).subscribe(result => {
      //all went well
      this.getKiosks();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getKiosks() {
    this.kiosks$ = this.kioskService.getKiosks().subscribe(result => {
      this.kiosks = result;
    })
  }
}
