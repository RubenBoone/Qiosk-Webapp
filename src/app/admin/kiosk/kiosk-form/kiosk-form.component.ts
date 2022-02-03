import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Kiosk } from '../kiosk-table/kiosk';
import { KioskService } from '../kiosk.service';

@Component({
  selector: 'app-kiosk-form',
  templateUrl: './kiosk-form.component.html',
  styleUrls: ['./kiosk-form.component.scss']
})
export class KioskFormComponent implements OnInit {
  isAdd: boolean = false;
  isEdit: boolean = false;
  kioskID: number = 0;

  kiosk: Kiosk = { kioskID: 0, name: "", description: "", coordinate: "" };

  isSubmitted: boolean = false;
  errorMessage: string = "";

  kiosk$: Subscription = new Subscription();
  postKiosk$: Subscription = new Subscription();
  putKiosk$: Subscription = new Subscription();

  constructor(private router: Router, private kioskService: KioskService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.kioskID = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.kioskID != null && this.kioskID > 0) {
      this.kiosk$ = this.kioskService.getKiosk(this.kioskID).subscribe(result => this.kiosk = result);
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.kiosk$.unsubscribe();
    this.postKiosk$.unsubscribe();
    this.putKiosk$.unsubscribe();
  }

  onSubmit(form: NgForm) {
    var regEx = /^((\d+)((,))((\d+))((,))(\d+))?$/;
    if (!form.value.coordinate.match(regEx)) return alert("Coördinaat is niet van het type x,y,radius")

    this.isSubmitted = true;
    if (this.isAdd) {
      this.postKiosk$ = this.kioskService.postKiosk(this.kiosk).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/kiosks");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putKiosk$ = this.kioskService.putKiosk(this.kioskID, this.kiosk).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/kiosks");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }
}