import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

  export class LoginComponent implements OnInit {
    tittle: any;
    spinnerService: any;
  
    public isVisible: boolean = false;
  
  
     //declaring form group
     loginForm = new FormGroup({
        
      email :new FormControl(''),
      password :new FormControl('')
       
      
    });
onSubmit: any;

  constructor() { }

  ngOnInit(): void {
  }

}
