import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/admin/user/users-table/company';
import { User } from 'src/app/admin/user/users-table/user';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  constructor( private router: Router,private loader: LoadingService) {}
  errorC :string ="";
  errorV :string ="";
  errorA :string ="";
  errorE :string ="";
  errorP :string ="";

  loading$ = this.loader.loading$;
  @Input() company: string = '';
  @Input() email: string = '';
  @Input() firstname: string = '';
  @Input() lastname: string = '';
  @Input() password: string = '';
  @Input() extraEmail: string = '';
  @Input() extraFirstName: string = '';
  @Input() extraLastName: string = '';

  @Input() extraUsers: Array<Array<any>> = [];

  @Input() addExtraUser() {
    this.extraUsers.push([
      this.extraFirstName,
      this.extraLastName,
      this.extraEmail,
    ]);

    this.extraEmail = '';
    this.extraFirstName = '';
    this.extraLastName = '';
  }

  @Input() deleteExtraUser(msg: string) {
    let index = 0;
    this.extraUsers.forEach((element) => {
      if (element[0] == msg) {
        index = this.extraUsers.indexOf(element);
      }
    });

    this.extraUsers.splice(index, 1);
  }

  @Output() getUserData = new EventEmitter<{
    organisator: User;
    users: Array<Array<string>>;
  }>();

  companyObject: Company = { companyID: 0, name: '' };

  UserData() {
    this.companyObject.name = this.company;

    this.getUserData.emit({
      organisator: {
        userID: 0,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        isActive: true,
        isAdmin: false,
        companyID: 0,
        company: this.companyObject,
        password: this.password,
      },
      users: this.extraUsers,
    });
  }

  onSubmit() {
    if(this.validForm()){
    this.UserData();
  }
  }

  createRange(number: number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  validForm(){
    if(this.company.trim()==""||this.firstname.trim()==""||this.lastname.trim()==""||this.email.trim()==""||this.password.trim()==""||this.password.trim().length<4)
    {
      this.errorC=this.company.trim()==""?"* (Bedrijf mag niet leeg zijn)":""
      this.errorV=this.firstname.trim()==""?"* (Voornaam mag niet leeg zijn)":""
      this.errorA=this.lastname.trim()==""?"* (Achternaam mag niet leeg zijn)":""
      this.errorE=this.email.trim()==""?"* (Email moet coorect ingevuld  zijn)":""
      this.errorP=this.password.trim()==""?"* (Wachtwoord mag niet leeg zijn)":""
      this.errorP=this.password.trim().length<4?"* (Wachtwoord moet minimaal 4 tekens zijn)":""
      return false
    }
    return true
  }

  async backToTop() {
    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });
      //all went well
      this.loader.show()
      await new Promise(f => setTimeout(f, 6000));
      if(this.validForm())this.router.navigateByUrl("boeking/bevestiging");
      this.loader.hide()
    }
  ngOnInit(): void {}
}
