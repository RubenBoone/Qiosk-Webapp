import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Tag } from '../../tag/tag-table/tag';
import { TagService } from '../../tag/tag.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/users-table/user';
import { TaguserService } from '../taguser.service';
import { UserTag } from './taguser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LanguageApp } from 'src/app/shared/datatables/languages';

@Component({
  selector: 'app-taguser-table',
  templateUrl: './taguser-table.component.html',
  styleUrls: ['./taguser-table.component.scss'],
})
export class TaguserTableComponent implements OnInit {
    // font awesome icons
    faSort=faSort


  us:string="";u:string="";actionType:string=""
  ts:string="";t:string=""
  userID:number=0
  tagID:number=0
  filteredUsers:User[]=[]
  filteredTags:Tag[]=[]
  users:User[]=[]
  usersF:User[]=[]
  tags:Tag[]=[]
  tagsF:Tag[]=[]
  utList:[[number,string,string]]=[[0,"",""]]
  tagUsers: UserTag[] = [];
  users$: Subscription = new Subscription();
  tags$: Subscription = new Subscription();
  tagUsers$: Subscription = new Subscription();
  modalRef: BsModalRef = new BsModalRef();
  errorMessage: string = '';
  // Extra
  dtOptions: DataTables.Settings = {};

  constructor(private router: Router,private modalService: BsModalService, private taguserService: TaguserService,private userService:UserService,private tagService:TagService ) {}

  ngOnInit(): void {
    this.dtOptions = {
      language: LanguageApp.dutch_datatables
    };
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.tagUsers$.unsubscribe();
    this.users$.unsubscribe();
    this.tags$.unsubscribe();
  }
  onUserSearch(){
   this.usersF=this.filterUsers()
  }
  onTagSearch(){
   this.tagsF=this.filterTags()
  }

onUserChange(newUserID:number){
this.userID=newUserID;
this.tagID=0;

}
onTagChange(newTagID:number){
this.tagID=newTagID
}
confirm()
{
  var userTag=this.tagUsers.find(t=>t.tagID==this.tagID)
  var ut=this.tagUsers.find(t=>t.userID==this.userID)
  if(ut!=null&&this.tagID!=ut.tagID){
   this.disconnect(ut.userTagID)
  }else{
 if(userTag!= null){
  userTag.userID=this.userID;
  this.tagUsers$ = this.taguserService.putUserTag(userTag.userTagID,userTag).subscribe((result) => {
   this.getUserTags()
  });
  this.modalRef.hide()
}else{
  var userTagNew:UserTag={userTagID:0,userID:this.userID,tagID:this.tagID}
  this.tagUsers$ = this.taguserService.postUserTag(userTagNew).subscribe((result) => {
    this.getUserTags()
   });
   this.modalRef.hide()
}}
this.tagID=0
}
decline(){ this.modalRef.hide()}

disconnect(utID:number){
  this.tagUsers$ = this.taguserService.deleteUsertag(utID).subscribe((result) => {
    this.getUserTags()
   });
}
openModal(template: TemplateRef<any>) {
  if(this.userID>0 &&this.tagID>0)
  {
    this.actionType="koppelen"
   var su = this.usersF.find(u=>u.userID==this.userID)
    if(su!=null) this.u=su.firstName+" "+su.lastName
   var st = this.tagsF.find(t=>t.tagID==this.tagID)
    if(st!=null) this.t=st.code
    this.modalRef = this.modalService.show(template, {class: 'modal-md',animated: true});
}
}
  getUsers() {
    this.users$ = this.userService.getUsers().subscribe((result) => {
      this.users = result;
      this.usersF=this.users
this.getTags()
    });
  }
  getTags() {
    this.tags$ = this.tagService.getTags().subscribe((result) => {
      this.tags = result;
      this.tagsF=this.tags
      this.getUserTags()
    });
  }
  getUserTags() {
    this.tagUsers$ = this.taguserService.getUserTags().subscribe((result) => {
      this.tagUsers = result;
      this.buildList()
    });
  }
  filterUsers(){
if(this.us.trim()!=""){
  this.filteredUsers=[]
  this.users.forEach(u => {
   if((u.firstName+" "+u.lastName).toLowerCase().includes(this.us.toLowerCase())){
     this.filteredUsers.push(u)
   }
  });
    return this.filteredUsers
    }else{return this.users}
}
  filterTags(){
if(this.ts.trim()!=""){
  this.filteredTags=[]
  this.tags.forEach(t => {
   if((t.code).toLowerCase().includes(this.ts.toLowerCase())){
     this.filteredTags.push(t)
   }
  });
    return this.filteredTags
    }else{return this.tags}
}
buildList(){
  this.utList=[[0,"",""]]
  this.tagUsers.forEach(ut => {
this.utList.push([ut.userTagID,this.tags.filter(t=>t.tagID==ut.tagID)[0].code,this.users.filter(t=>t.userID==ut.userID)[0].firstName+" "+this.users.filter(t=>t.userID==ut.userID)[0].lastName])
  });
  this.RemoveElementFromObjectArray(0)
}
 RemoveElementFromObjectArray(key: number) {
  this.utList.forEach((value,index)=>{
      if(value[0]==key) this.utList.splice(index,1);
  });
}

}
