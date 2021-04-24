import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";


export class User{
  username: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  @Input() error: boolean = false;
  @Output() loginChange: EventEmitter<boolean> = new EventEmitter();
  public warning:string;

  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void{
    console.log(f.value.username + f.value.email + f.value.message)
      if(f.value.username && f.value.email && f.value.message){
        this.loginChange.emit(true);
        this.error = true;
        this.warning = ""
      }else{
        this.warning = "please fill out missing forums"
        this.error =false;
      }
      console.log(this.warning)
  }
}
