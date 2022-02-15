import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserbookingService } from '../userbooking.service';
import { DateAdapter } from '@angular/material/core';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Output() goToNextStep = new EventEmitter<{ date: Date; time: string }>();
  ts:boolean=false
  negen :boolean=false;
  een:boolean=false;
  times: Number[]=[];
  loading$ = this.loader.loading$;

  constructor(private loader: LoadingService,private userBookingService : UserbookingService,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('nl');
  }
  minDate = new Date(new Date().setDate(new Date().getDate() + 1));
  maxDate =new Date(new Date().setFullYear(new Date().getFullYear() + 2));
  errorMessage :String="";
  bookingSlots$:Subscription=new Subscription();
  @Input() date: Date = (new Date().getDay()==0)?new Date(new Date().setDate(new Date().getDate()+1)):((new Date().getDay()==6)?new Date(new Date().setDate(new Date().getDate()+2)):((new Date().getDay()==5)?new Date(new Date().setDate(new Date().getDate()+3)):new Date(new Date().setDate(new Date().getDate() + 1))));
  @Input() time: string = '';

  nextStep() {
    if(this.ts){
    this.goToNextStep.emit({
      date: this.date,
      time: this.time,
    });}
    else{
      this.errorMessage="Kies een beschikbare moment!"
      console.log("time not selected")
    }
  }

  async ngOnInit(): Promise<void> {

    this.loader.show();
    await this.getDateTimes();
    this.loader.hide();

  }
  timeSelected(t:Number){
    if(this.time.includes(t.toString())){
      this.time=""
      this.ts=false;
     } else{
     this.time=t==9?"09:00":(t==1?"13:00":"")
     this.ts= this.time!=""?true:false;
  }
  }

  dateSelected(){
    this.time="";
    this.ts=false
    this.getDateTimes();

  }
  async getDateTimes(){
  this.bookingSlots$ = await this.userBookingService
  .getAvailableTimesForDate((this.date.getMonth()+1)+"-"+this.date.getDate()+"-"+this.date.getFullYear()).subscribe(result => {
    this.times = result;
    this.negen=this.times.indexOf(9)>-1?true:false;
    this.een=this.times.indexOf(1)>-1?true:false;

  })
}
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  ngOnDestroy(): void {
    this.bookingSlots$.unsubscribe();
  }

}
