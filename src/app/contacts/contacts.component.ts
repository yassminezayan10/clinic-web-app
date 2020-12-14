import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
 alert:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  message=new FormGroup({
    "name":new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[ ]?|[a-z]+['-]?)+$/)]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'message_field':new FormControl('',[Validators.required])
  });
  data(){
    
    if(this.message.valid){
      this.alert=true
      this.message.reset({})
    }
  }
  closeAlert(){
    this.alert=false
  }

}
